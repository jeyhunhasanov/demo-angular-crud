import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss']
})
export class CreateOrUpdateComponent implements OnInit {
  formCreateOrUpdate = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required])
  })

  constructor(public dialogCreateOrUpdateUser: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {}

  get name(): FormControl {
    return this.formCreateOrUpdate.get('name') as FormControl
  }

  get email(): FormControl {
    return this.formCreateOrUpdate.get('email') as FormControl
  }

  get gender(): FormControl {
    return this.formCreateOrUpdate.get('gender') as FormControl
  }

  get status(): FormControl {
    return this.formCreateOrUpdate.get('status') as FormControl
  }

  handleSubmitBtnCreateOrUpdate() {
    if (this.formCreateOrUpdate.valid) {
      console.log('Create or update form data: ', this.formCreateOrUpdate.value)
    }
  }

  handleClickBtnCancel() {
    this.dialogCreateOrUpdateUser.closeAll()
  }

  ngOnInit(): void {
    if (this.data.userDetails) {
      const {id, orderNumber, ...userDetails} = this.data.userDetails
      this.formCreateOrUpdate.setValue(userDetails)
    }
  }
}
