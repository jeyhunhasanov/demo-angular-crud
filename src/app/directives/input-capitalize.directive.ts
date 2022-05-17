import {Directive, HostListener, Input, NgModule, OnInit} from '@angular/core'

enum transformCase {
  ONLY = 'only',
  EVERY = 'every'
}

@Directive({
  selector: '[appInputCapitalizeDirective]'
})
export class InputCapitalizeDirective implements OnInit {
  constructor() {}

  @Input() appInputCapitalizeDirective: string = ''

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value
    if (this.appInputCapitalizeDirective === transformCase.EVERY) {
      const character = ' '
      const words = value.split(character)
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
      }
      event.target.value = words.join(character)
    } else if (this.appInputCapitalizeDirective === transformCase.ONLY) {
      event.target.value = value.charAt(0).toUpperCase() + value.slice(1)
    }
  }

  ngOnInit() {}
}

@NgModule({
  declarations: [InputCapitalizeDirective],
  exports: [InputCapitalizeDirective]
})
export class InputCapitalizeDirectiveModule {}
