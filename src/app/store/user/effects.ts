import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {ApiServices} from '../../services/api.service'
import {
  ACTION_CREATE_USER,
  ACTION_DELETE_USER,
  ACTION_UPDATE_USER,
  ACTION_USER_OPERATIONS_SUCCEED,
  ACTION_USERS,
  ACTION_USERS_LOAD_FAILED,
  ACTION_USERS_LOAD_SUCCEED
} from './actions'

@Injectable()
export class Effects {
  constructor(private apiService: ApiServices, private actions: Actions) {}

  getUsers = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_USERS),
      mergeMap((action: any) => {
        const params = action.queryParams
        return this.apiService.get(`/user/getAll`, {params}).pipe(
          map((users) => ACTION_USERS_LOAD_SUCCEED({users})),
          catchError((error) => of(ACTION_USERS_LOAD_FAILED({error: error.message})))
        )
      })
    )
  )

  createUser = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_CREATE_USER),
      mergeMap((action: any) => {
        const payload = action.payload
        return this.apiService.post(`/user/create`, payload).pipe(map(() => ACTION_USER_OPERATIONS_SUCCEED()))
      })
    )
  )

  updateUser = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_UPDATE_USER),
      mergeMap((action: any) => {
        const payload = action.payload
        return this.apiService.put(`/user/update`, payload).pipe(map(() => ACTION_USER_OPERATIONS_SUCCEED()))
      })
    )
  )

  deleteUser = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_DELETE_USER),
      mergeMap((action: any) => {
        const userId = action.userId
        return this.apiService
          .delete(`/user/delete`, {body: {id: userId}})
          .pipe(map(() => ACTION_USER_OPERATIONS_SUCCEED()))
      })
    )
  )
}
