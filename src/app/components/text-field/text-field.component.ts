import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core'
import {MatFormFieldAppearance} from '@angular/material/form-field'
import {FormGroup} from '@angular/forms'

interface IValidationErrors {
  required?: boolean
  email?: boolean
  minlength?: {
    requiredLength?: number
  }
}

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit, OnChanges {
  constructor() {}

  validationRules: IValidationErrors = {}

  @Input() type: string = 'text'
  @Input() appearance: MatFormFieldAppearance = 'outline'
  @Input() label!: string
  @Input() formGrp!: FormGroup
  @Input() formCtrlNm!: string
  @Input() rules: any = {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.validationRules = changes?.['rules']?.currentValue
  }
}
