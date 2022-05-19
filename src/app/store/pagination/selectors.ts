import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store'

import {IStatePagination} from './state'
import {Getters} from './getters'
import {FEATURE_KEY_PAGINATION} from './types'
import {IPaginationOptions} from '../../models/General'

export const paginationState: MemoizedSelector<object, IStatePagination> =
  createFeatureSelector<IStatePagination>(FEATURE_KEY_PAGINATION)

export const selectorPaginationOptions: MemoizedSelector<object, IPaginationOptions> = createSelector(
  paginationState,
  Getters.paginationOptions
)
