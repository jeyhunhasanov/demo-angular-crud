import {createAction, props} from '@ngrx/store'
import {IUser, IUserQueryParams} from '../../models/User'

export const ACTION_USERS = createAction('FETCH_USERS', props<{queryParams: IUserQueryParams}>())

export const ACTION_USERS_SUCCEED = createAction('USERS_LOAD_SUCCEED', props<{users: IUser[]}>())

export const ACTION_USERS_FAILED = createAction('USERS_LOAD_FAILED', props<{error: any}>())

export const ACTION_CREATE_USER = createAction('FETCH_CREATE_USER', props<{payload: IUserQueryParams}>())

export const ACTION_CREATE_USER_SUCCEED = createAction('CREATE_USER_SUCCEED', props<{user: IUser}>())
