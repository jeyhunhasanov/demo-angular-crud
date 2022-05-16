import {Component, OnInit} from '@angular/core'
import {MatDialog} from '@angular/material/dialog'
import {DialogComponent} from '../../components/dialog/dialog.component'
import {CreateOrUpdateComponent} from './components/create-or-update/create-or-update.component'

export interface PeriodicElement {
  orderNumber: number
  id: number
  name: string
  email: string
  gender: string
  status: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['orderNumber', 'id', 'name', 'email', 'gender', 'status', 'actions']
  users: PeriodicElement[] = [
    {orderNumber: 1, id: 1, name: 'Hydrogen', email: 'Hydrogen', gender: 'male', status: 'active'},
    {orderNumber: 2, id: 2, name: 'Helium', email: 'Helium', gender: 'male', status: 'active'},
    {orderNumber: 3, id: 3, name: 'Lithium', email: 'Lithium', gender: 'female', status: 'active'},
    {orderNumber: 4, id: 4, name: 'Beryllium', email: 'Beryllium', gender: 'male', status: 'active'},
    {orderNumber: 5, id: 5, name: 'Boron', email: 'Boron', gender: 'male', status: 'inactive'},
    {orderNumber: 6, id: 6, name: 'Carbon', email: 'Carbon', gender: 'male', status: 'active'},
    {orderNumber: 7, id: 7, name: 'Nitrogen', email: 'Nitrogen', gender: 'male', status: 'active'},
    {orderNumber: 8, id: 8, name: 'Oxygen', email: 'Oxygen', gender: 'female', status: 'active'},
    {orderNumber: 9, id: 9, name: 'Fluorine', email: 'Fluorine', gender: 'male', status: 'active'},
    {orderNumber: 10, id: 10, name: 'Neon', email: 'Neon', gender: 'male', status: 'inactive'}
  ]

  constructor(public dialogCreateOrUpdateUser: MatDialog) {}

  ngOnInit(): void {}

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
