import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {DialogComponent} from '../../components/dialog/dialog.component'
import {CreateOrUpdateComponent} from './components/create-or-update/create-or-update.component'
import {selectorUsers} from '../../store/user'
import {ACTION_USERS} from '../../store/user/actions'
import {IStateUser} from '../../store/user/state'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['orderNumber', 'id', 'name', 'email', 'gender', 'status', 'actions']

  public $usersSelectors: Observable<IStateUser> = this.store.select(selectorUsers)

  constructor(public dialogCreateOrUpdateUser: MatDialog, private store: Store<{}>) {}

  ngOnInit(): void {
    this.store.dispatch(ACTION_USERS())
  }

  handleClickCreatingUser(userDetails?: any) {
    this.dialogCreateOrUpdateUser.open(DialogComponent, {
      width: '100%',
      maxWidth: '450px',
      data: {
        title: 'Creating user',
        content: CreateOrUpdateComponent,
        userDetails
      }
    })
  }
}
