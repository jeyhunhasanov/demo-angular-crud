import {Action, createReducer, on} from '@ngrx/store'
import {
  ACTION_CREATE_USER,
  ACTION_CREATE_USER_SUCCEED,
  ACTION_USERS,
  ACTION_USERS_FAILED,
  ACTION_USERS_SUCCEED
} from './actions'
import {initialState, IStateUser} from './state'
import {EnumRequestStatus} from '../../enums'

const userReducer = createReducer(
  initialState,
  on(ACTION_USERS, (state: IStateUser) => ({
    ...state,
    isLoading: true,
    error: null,
    status: EnumRequestStatus.LOADING
  })),
  on(ACTION_USERS_SUCCEED, (state: IStateUser, {users}) => ({
    ...state,
    users,
    isLoading: false,
    status: EnumRequestStatus.SUCCEED
  })),
  on(ACTION_USERS_FAILED, (state: IStateUser, {error}) => ({
    ...state,
    error,
    isLoading: false,
    status: EnumRequestStatus.FAILED
  })),
  on(ACTION_CREATE_USER, (state: IStateUser) => ({
    ...state,
    isLoading: true,
    error: null,
    status: EnumRequestStatus.LOADING
  })),
  on(ACTION_CREATE_USER_SUCCEED, (state: IStateUser, {user}) => ({
    ...state,
    users: [...[user], ...state.users],
    isLoading: false,
    status: EnumRequestStatus.SUCCEED
  }))
)

export function reducer(state: IStateUser | undefined, action: Action) {
  return userReducer(state, action)
}
