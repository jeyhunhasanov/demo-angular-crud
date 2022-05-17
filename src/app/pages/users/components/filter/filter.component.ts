import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formData: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    gender: [''],
    status: ['']
  })

  buttonsGender: any = [
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

  buttonsStatus: any = [
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

  ngOnInit(): void {}

  handleSubmitBtnSearch() {
    if (this.formData.valid) {
      console.log('Search form data: ', this.formData.value)
    }
  }

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
}
