import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {of} from 'rxjs'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {ApiServices} from '../../services/api.service'
import {ACTION_USERS, ACTION_USERS_FAILED, ACTION_USERS_SUCCEED} from './actions'

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
}
