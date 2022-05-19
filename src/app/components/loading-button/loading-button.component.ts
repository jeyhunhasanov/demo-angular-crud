import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core'
import {ThemePalette} from '@angular/material/core'

@Component({
  selector: 'app-loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingButtonComponent implements OnInit {
  constructor() {}

  @Input() text!: string
  @Input() icon: string = ''
  @Input() color: ThemePalette = 'primary'
  @Input() type: string = 'submit'
  @Input() loading: boolean | undefined = false
  @Input() disabled: boolean = false

  ngOnInit(): void {}
}
