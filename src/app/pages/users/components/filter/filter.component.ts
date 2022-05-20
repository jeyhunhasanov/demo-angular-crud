import {Component, OnInit, Output} from '@angular/core'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
// Services
import {EventBus} from '../../../../services/evetnBus.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  // region Data

  public formData: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    gender: [''],
    status: ['']
  })

  public buttonsGender: any = [
    {
      text: 'All',
      value: ''
    },
    {
      text: 'Male',
      value: 'male'
    },
    {
      text: 'Female',
      value: 'female'
    }
  ]

  public buttonsStatus: any = [
    {
      text: 'All',
      value: ''
    },
    {
      text: 'Active',
      value: 'active'
    },
    {
      text: 'Inactive',
      value: 'inactive'
    }
  ]

  // endregion

  // region Props

  @Output() triggerSubmitBtnSearch = EventBus

  // endregion

  // region Methods

  handleSubmitBtnSearch() {
    this.resetFields()
    this.triggerSubmitBtnSearch.emit(this.formData.value)
  }

  resetFields() {
    if (!this.formData.value.name) {
      this.formData.value.name = ''
    }
    if (!this.formData.value.email) {
      this.formData.value.email = ''
    }
    if (!this.formData.value.gender) {
      this.formData.value.gender = ''
    }
    if (!this.formData.value.status) {
      this.formData.value.status = ''
    }
  }

  handleClickBtnReset() {
    this.formData.reset()
    this.handleSubmitBtnSearch()
  }

  // endregion

  // region Hooks

  ngOnInit(): void {}

  // endregion

  // region Computed

  get name(): FormControl {
    return this.formData.get('name') as FormControl
  }

  get email(): FormControl {
    return this.formData.get('email') as FormControl
  }

  get gender(): FormControl {
    return this.formData.get('gender') as FormControl
  }

  get status(): FormControl {
    return this.formData.get('status') as FormControl
  }

  // endregion
}
