import {Component, Input, OnInit} from '@angular/core'
import {FormGroup} from '@angular/forms'

interface IRadioButtons {
  text: string
  value: string | number
}

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  constructor() {}

  @Input() label!: string
  @Input() required: boolean = false
  @Input() formCtrlNm!: string
  @Input() formGrp!: FormGroup
  @Input() buttons!: IRadioButtons[]

  ngOnInit(): void {}
}
