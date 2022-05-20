import {Action, createReducer, on} from '@ngrx/store'
import {
  ACTION_CREATE_USER,
  ACTION_DELETE_USER,
  ACTION_UPDATE_USER,
  ACTION_USER_OPERATIONS_SUCCEED,
  ACTION_USERS,
  ACTION_USERS_LOAD_FAILED,
  ACTION_USERS_LOAD_SUCCEED
} from './actions'
import {initialState, IStateUser} from './state'
import {EnumRequestStatus} from '../../enums'

const userReducer = createReducer(
  initialState,
  on(ACTION_USERS_LOAD_SUCCEED, (state: IStateUser, {users}) => ({
    ...state,
    users,
    usersLoading: false,
    status: EnumRequestStatus.SUCCEED
  })),
  on(ACTION_USERS_LOAD_FAILED, (state: IStateUser, {error}) => ({
    ...state,
    error,
    usersLoading: false,
    status: EnumRequestStatus.FAILED
  })),
  on(ACTION_USER_OPERATIONS_SUCCEED, (state: IStateUser) => ({
    ...state,
    isLoading: false,
    status: EnumRequestStatus.SUCCEED
  })),
  on(ACTION_USERS, (state: IStateUser) => ({
    ...state,
    usersLoading: true,
    error: null,
    status: EnumRequestStatus.LOADING
  })),
  on(ACTION_CREATE_USER, (state: IStateUser) => ({
    ...state,
    isLoading: true,
    status: EnumRequestStatus.LOADING
  })),
  on(ACTION_UPDATE_USER, (state: IStateUser) => ({
    ...state,
    isLoading: true,
    status: EnumRequestStatus.LOADING
  })),
  on(ACTION_DELETE_USER, (state: IStateUser) => ({
    ...state,
    isLoading: true,
    status: EnumRequestStatus.LOADING
  }))
)

export function reducer(state: IStateUser | undefined, action: Action) {
  return userReducer(state, action)
}
