import {createAction, props} from '@ngrx/store'
import {IUser, IUserQueryParams} from '../../models/User'

export const ACTION_USERS_LOAD_SUCCEED = createAction('USERS_LOAD_SUCCEED', props<{users: IUser[]}>())

export const ACTION_USERS_LOAD_FAILED = createAction('USERS_LOAD_FAILED', props<{error: any}>())

export const ACTION_USER_OPERATIONS_SUCCEED = createAction('USER_OPERATIONS_SUCCEED')

export const ACTION_USERS = createAction('FETCH_USERS', props<{queryParams: IUserQueryParams}>())

export const ACTION_CREATE_USER = createAction('FETCH_CREATE_USER', props<{payload: IUserQueryParams}>())

export const ACTION_UPDATE_USER = createAction('FETCH_UPDATE_USER', props<{payload: IUserQueryParams}>())

export const ACTION_DELETE_USER = createAction('FETCH_DELETE_USER', props<{userId: string}>())
