import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {ApiServices} from '../../services/api.service'
import {
  ACTION_CREATE_OR_UPDATE_USER_SUCCEED,
  ACTION_CREATE_USER,
  ACTION_UPDATE_USER,
  ACTION_USERS,
  ACTION_USERS_FAILED,
  ACTION_USERS_SUCCEED
} from './actions'

@Injectable()
export class Effects {
  constructor(private apiService: ApiServices, private actions: Actions) {}

  getUsers = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_USERS),
      mergeMap((action: any) => {
        return this.apiService.get(`/users`, {params: action.queryParams}).pipe(
          map((users) => ACTION_USERS_SUCCEED({users})),
          catchError((error) => of(ACTION_USERS_FAILED({error: error.message})))
        )
      })
    )
  )

  createUser = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_CREATE_USER),
      mergeMap((action: any) => {
        return this.apiService
          .post(`/users`, action.payload)
          .pipe(map((user) => ACTION_CREATE_OR_UPDATE_USER_SUCCEED()))
      })
    )
  )

  updateUser = createEffect(() =>
    this.actions.pipe(
      ofType(ACTION_UPDATE_USER),
      mergeMap((action: any) => {
        const {id, ...payload} = action.payload
        return this.apiService.put(`/users/${id}`, payload).pipe(map(() => ACTION_CREATE_OR_UPDATE_USER_SUCCEED()))
      })
    )
  )
}
