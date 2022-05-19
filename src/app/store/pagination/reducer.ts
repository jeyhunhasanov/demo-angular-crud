import {Action, createReducer, on} from '@ngrx/store'
import {ACTION_PAGINATION_OPTIONS} from './actions'
import {initialState, IStatePagination} from './state'

const paginationOptionsReducer = createReducer(
  initialState,
  on(ACTION_PAGINATION_OPTIONS, (state: IStatePagination, {paginationOptions}) => ({
    ...state,
    paginationOptions
  }))
)

export function reducer(state: IStatePagination | undefined, action: Action) {
  return paginationOptionsReducer(state, action)
}
