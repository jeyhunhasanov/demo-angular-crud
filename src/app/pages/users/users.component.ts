import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {take} from 'rxjs/operators'
// Components
import {DialogComponent} from '../../components/dialog/dialog.component'
import {CreateOrUpdateComponent} from './components/create-or-update/create-or-update.component'
// Enums
import {EnumRequestStatus} from '../../enums'
// Models
import {IPaginationOptions} from '../../models/General'
import {IUser, IUserQueryParams} from '../../models/User'
// Services
import {SnackbarService} from '../../services/snackbar.service'
// Stores
import {selectorUsers} from '../../store/user'
import {ACTION_DELETE_USER, ACTION_USERS} from '../../store/user/actions'
import {IStateUser} from '../../store/user/state'
import {selectorPaginationOptions} from '../../store/pagination'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(public dialog: MatDialog, private store: Store<{}>, private snackbar: SnackbarService) {}

  // region Data

  public displayedColumns: string[] = ['orderNumber', 'id', 'name', 'email', 'gender', 'status', 'actions']

  public $selectorsUser: Observable<IStateUser> = this.store.select(selectorUsers)
  public $paginationOptionsSelector: Observable<IPaginationOptions> = this.store.select(selectorPaginationOptions)

  public userQueryParams: IUserQueryParams = {
    page: 1
  }

  public pageIndex: number = 0

  // endregion

  // region Methods

  triggerFetchUsers(queryParams: IUserQueryParams, pageIndex: number = 0) {
    this.pageIndex = pageIndex
    this.userQueryParams = queryParams
    this.store.dispatch(ACTION_USERS({queryParams: this.userQueryParams}))
  }

  handleClickCreatingOrUpdatingUser(userDetails?: IUser) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {
        title: !!userDetails ? 'Updating user' : 'Creating user',
        component: CreateOrUpdateComponent,
        userDetails,
        userQueryParams: this.userQueryParams
      }
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result === EnumRequestStatus.SUCCEED) {
        this.triggerFetchUsers(this.userQueryParams, this.pageIndex)
      }
    })
  }

  handleClickDeletingUser(userDetails: IUser) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Deleting user',
        message: `Are you sure you want to delete the user named ${userDetails?.name}?`,
        hasActions: true
      }
    })
    dialogRef.beforeClosed().subscribe((result: boolean) => {
      if (result) {
        this.store.dispatch(ACTION_DELETE_USER({userId: userDetails.id!}))
        this.$selectorsUser.pipe(take(2)).subscribe((selectorUsers: IStateUser) => {
          if (selectorUsers.status === EnumRequestStatus.SUCCEED) {
            this.snackbar.show({
              message: 'User deleted'
            })
            this.triggerFetchUsers(this.userQueryParams, this.pageIndex)
          }
        })
      }
    })
  }

  handleChangePage(paginationOptions: IPaginationOptions) {
    const params = {...this.userQueryParams, ...{page: paginationOptions.pageIndex + 1}}
    this.triggerFetchUsers(params, paginationOptions.pageIndex)
  }

  triggerSubmitBtnSearch(queryParams: any) {
    this.userQueryParams = queryParams
    this.triggerFetchUsers(queryParams, 0)
  }

  // endregion

  // region Hooks

  ngOnInit(): void {
    this.triggerFetchUsers(this.userQueryParams)
  }

  // endregion
}
