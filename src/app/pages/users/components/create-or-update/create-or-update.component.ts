import {Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss']
})
export class CreateOrUpdateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogCreateOrUpdateUser: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  formData: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    gender: [null, [Validators.required]],
    status: [null, [Validators.required]]
  })

  buttonsGender: any = [
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
      text: 'Active',
      value: 'active'
    },
    {
      text: 'Inactive',
      value: 'inactive'
    }
  ]

  handleSubmitBtnCreateOrUpdate() {
    if (this.formData.valid) {
      console.log('Create or update form data: ', this.formData.value)
    }
  }

  handleClickBtnCancel() {
    this.dialogCreateOrUpdateUser.closeAll()
  }

  ngOnInit(): void {
    if (this.data.userDetails) {
      const {id, orderNumber, ...userDetails} = this.data.userDetails
      this.formData.setValue(userDetails)
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
