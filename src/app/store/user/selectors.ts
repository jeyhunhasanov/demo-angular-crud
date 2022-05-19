import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store'

import {IStateUser} from './state'
import {Getters} from './getters'
import {IUser} from '../../models/User'
import {FEATURE_KEY_USER} from './types'

export const userState: MemoizedSelector<object, IStateUser> = createFeatureSelector<IStateUser>(FEATURE_KEY_USER)

export const users: MemoizedSelector<object, IUser[]> = createSelector(userState, Getters.users)

export const isLoading: MemoizedSelector<object, boolean> = createSelector(userState, Getters.isLoading)

export const error: MemoizedSelector<object, any> = createSelector(userState, Getters.error)

export const selectorUsers = createSelector(
  users,
  isLoading,
  error,
  (users: IUser[], isLoading: boolean, error: any) => ({
    users,
    error,
    isLoading
  })
)
