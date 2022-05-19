import {createAction, props} from '@ngrx/store'
import {IUser} from '../../models/User'

export const ACTION_USERS = createAction('FETCH_USERS')

export const ACTION_USERS_SUCCEED = createAction('USERS_LOAD_SUCCEED', props<{users: IUser[]}>())

export const ACTION_USERS_FAILED = createAction('USERS_LOAD_FAILED', props<{error: any}>())