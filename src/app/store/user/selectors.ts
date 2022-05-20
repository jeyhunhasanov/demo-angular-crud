import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store'

import {IStateUser} from './state'
import {Getters} from './getters'
import {IUser} from '../../models/User'
import {FEATURE_KEY_USER} from './types'

export const userState: MemoizedSelector<object, IStateUser> = createFeatureSelector<IStateUser>(FEATURE_KEY_USER)

export const users: MemoizedSelector<object, IUser[]> = createSelector(userState, Getters.users)

export const usersLoading: MemoizedSelector<object, boolean> = createSelector(userState, Getters.usersLoading)

export const isLoading: MemoizedSelector<object, boolean> = createSelector(userState, Getters.isLoading)

export const error: MemoizedSelector<object, any> = createSelector(userState, Getters.error)

export const status: MemoizedSelector<object, string> = createSelector(userState, Getters.status)

export const selectorUsers = createSelector(
  users,
  usersLoading,
  isLoading,
  error,
  status,
  (users: IUser[], usersLoading: boolean, isLoading: boolean, error: any, status: string) => ({
    users,
    usersLoading,
    isLoading,
    error,
    status
  })
)
