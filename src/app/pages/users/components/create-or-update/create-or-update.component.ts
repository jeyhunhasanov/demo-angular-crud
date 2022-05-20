import {Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {take} from 'rxjs/operators'
// Components
import {DialogComponent} from '../../../../components/dialog/dialog.component'
// Enums
import {EnumRequestStatus} from '../../../../enums'
// Services
import {SnackbarService} from '../../../../services/snackbar.service'
// Stores
import {ACTION_CREATE_USER, ACTION_UPDATE_USER} from '../../../../store/user/actions'
import {selectorUsers} from '../../../../store/user'
import {IStateUser} from '../../../../store/user/state'

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss']
})
export class CreateOrUpdateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogCreateOrUpdateUserRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<{}>,
    private snackbar: SnackbarService
  ) {}

  // region Data

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

  private userId!: number

  public $selectorsUser: Observable<IStateUser> = this.store.select(selectorUsers)

  // endregion

  // region Methods

  handleSubmitBtnCreateOrUpdate() {
    if (this.formData.valid) {
      let message: string
      if (this.userId) {
        message = 'User updated'
        const payload = {...{id: this.userId}, ...this.formData.value}
        this.store.dispatch(ACTION_UPDATE_USER({payload}))
      } else {
        message = 'User created'
        this.store.dispatch(ACTION_CREATE_USER({payload: this.formData.value}))
      }
      this.$selectorsUser.pipe(take(2)).subscribe((selectorUsers: IStateUser) => {
        if (selectorUsers.status === EnumRequestStatus.SUCCEED) {
          this.dialogCreateOrUpdateUserRef.close(EnumRequestStatus.SUCCEED)
          this.snackbar.show({
            message
          })
        }
      })
    }
  }

  handleClickBtnCancel() {
    this.dialogCreateOrUpdateUserRef.close()
  }

  // endregion

  // region  Hooks

  ngOnInit(): void {
    if (this.data.userDetails) {
      const {id, orderNumber, ...userDetails} = this.data.userDetails
      this.userId = id
      this.formData.setValue(userDetails)
    }
  }

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
