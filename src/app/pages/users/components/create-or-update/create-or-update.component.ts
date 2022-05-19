import {Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog'
import {ACTION_CREATE_USER} from '../../../../store/user/actions'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {selectorUsers} from '../../../../store/user'
import {EnumRequestStatus} from '../../../../enums'
import {IStateUser} from '../../../../store/user/state'

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss']
})
export class CreateOrUpdateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogCreateOrUpdateUser: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<{}>
  ) {}

  public formData: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    gender: [null, [Validators.required]],
    status: [null, [Validators.required]]
  })

  public buttonsGender: any = [
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
      text: 'Active',
      value: 'active'
    },
    {
      text: 'Inactive',
      value: 'inactive'
    }
  ]

  public $selectorUsers: Observable<IStateUser> = this.store.select(selectorUsers)

  handleSubmitBtnCreateOrUpdate() {
    if (this.formData.valid) {
      this.store.dispatch(ACTION_CREATE_USER({payload: this.formData.value}))
      this.$selectorUsers.subscribe((selectorUsers: IStateUser) => {
        if (selectorUsers.status === EnumRequestStatus.SUCCEED) {
          this.handleClickBtnCancel()
        }
      })
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
