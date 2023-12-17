import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` <div>
    <h1>Child Component</h1>
    <p>
      <strong>{{ message }}</strong> - This message is passed by parent
      AppComponent as props.
    </p>
    <p>{{ power }} - Power</p>

    <p #box>Defualt Message</p>
  </div>`,
  styles: [],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() message: any = `child's default message`;
  @Input() power: any = 0;

  @ViewChild('box') rawHtml: ElementRef = new ElementRef('box'); // Can only be access once View is Initialized

  // It is the first thing that happens
  constructor() {
    console.log("ChildComponent's constructor was called");
  }
  // Whenver some property updates, ngOnChanges is called
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ChildComponent's ngOnChanges was called`);
    console.log(changes);
    // what if I want discard any changes in power beyond 10, i.e. max power can be 10
    if (+changes['power'].currentValue > 10) {
      this.power = 10;
    }
  }

  // Once all properties are initialized, ngOnit is called
  ngOnInit() {
    // Used to make api calls
    console.log(`ChildComponent's ngOnit was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Not Accessible
  }

  ngDoCheck() {
    console.log(`ChildComponent's ngDoCheck was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Not Accessible
  }

  ngAfterContentInit() {
    console.log(`ChildComponent's ngAfterContentInit was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Not Accessible
  }

  ngAfterContentChecked() {
    console.log(`ChildComponent's ngAfterContentChecked was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Not Accessible
  }

  ngAfterViewInit() {
    console.log(`ChildComponent's ngAfterViewInit was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Accessible
  }

  ngAfterViewChecked() {
    console.log(`ChildComponent's ngAfterViewChecked was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Accessible
  }

  // Whenver component is destroyed from DOM, ngOnDestroy is called
  ngOnDestroy() {
    // Used to un-register api calls
    console.log(`ChildComponent's ngOnDestroy was called`);
    // console.log('rawHtml:', this.rawHtml.nativeElement.innerHTML); //Accessible
  }
}
