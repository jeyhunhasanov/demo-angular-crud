import {Directive, HostListener, NgModule, OnInit} from '@angular/core'

@Directive({
  selector: '[appInputUppercaseDirective]'
})
export class InputUppercaseDirective implements OnInit {
  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value
    event.target.value = value.toUpperCase()
  }

  ngOnInit() {}
}

@NgModule({
  declarations: [InputUppercaseDirective],
  exports: [InputUppercaseDirective]
})
export class InputUppercaseDirectiveModule {}
