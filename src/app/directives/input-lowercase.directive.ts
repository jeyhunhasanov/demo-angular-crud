import {Directive, HostListener, NgModule, OnInit} from '@angular/core'

@Directive({
  selector: '[appInputLowercaseDirective]'
})
export class InputLowercaseDirective implements OnInit {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value
    event.target.value = value.toLowerCase()
  }

  ngOnInit() {}
}

@NgModule({
  declarations: [InputLowercaseDirective],
  exports: [InputLowercaseDirective]
})
export class InputLowercaseDirectiveModule {}
