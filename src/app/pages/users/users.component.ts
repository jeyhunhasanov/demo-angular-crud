import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {DialogComponent} from '../../components/dialog/dialog.component'
import {CreateOrUpdateComponent} from './components/create-or-update/create-or-update.component'
import {selectorUsers} from '../../store/user'
import {ACTION_USERS} from '../../store/user/actions'
import {IStateUser} from '../../store/user/state'
import {IUserQueryParams} from '../../models/User'
import {IPaginationOptions} from '../../models/General'
import {selectorPaginationOptions} from '../../store/pagination'
import {EnumRequestStatus} from '../../enums'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public displayedColumns: string[] = ['orderNumber', 'id', 'name', 'email', 'gender', 'status', 'actions']

  public $usersSelectors: Observable<IStateUser> = this.store.select(selectorUsers)
  public $paginationOptionsSelector: Observable<IPaginationOptions> = this.store.select(selectorPaginationOptions)

  public userQueryParams: IUserQueryParams = {
    page: 1
  }

  public pageIndex: number = 0

  constructor(public dialogCreateOrUpdateUser: MatDialog, private store: Store<{}>) {}

  ngOnInit(): void {
    this.triggerFetchUsers(this.userQueryParams)
  }

  triggerFetchUsers(queryParams: IUserQueryParams, pageIndex: number = 0) {
    this.pageIndex = pageIndex
    this.userQueryParams = queryParams
    this.store.dispatch(ACTION_USERS({queryParams: this.userQueryParams}))
  }

  handleClickCreatingOrUpdatingUser(userDetails?: any) {
    const dialogCreateOrUpdateUserRef = this.dialogCreateOrUpdateUser.open(DialogComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {
        title: !!userDetails ? 'Updating user' : 'Creating user',
        content: CreateOrUpdateComponent,
        userDetails,
        userQueryParams: this.userQueryParams
      }
    })

    dialogCreateOrUpdateUserRef.afterClosed().subscribe((result) => {
      if (result === EnumRequestStatus.SUCCEED) {
        this.triggerFetchUsers(this.userQueryParams, this.pageIndex)
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
}
