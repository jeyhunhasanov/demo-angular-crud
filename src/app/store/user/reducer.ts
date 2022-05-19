import {Action, createReducer, on} from '@ngrx/store'
import {ACTION_USERS, ACTION_USERS_FAILED, ACTION_USERS_SUCCEED} from './actions'
import {initialState, IStateUser} from './state'

const userReducer = createReducer(
  initialState,
  on(ACTION_USERS, (state: IStateUser) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ACTION_USERS_SUCCEED, (state: IStateUser, {users}) => ({
    ...state,
    users,
    isLoading: false
  })),
  on(ACTION_USERS_FAILED, (state: IStateUser, {error}) => ({
    ...state,
    error,
    isLoading: false
  }))
)

export function reducer(state: IStateUser | undefined, action: Action) {
  return userReducer(state, action)
}
