import {createAction, props} from '@ngrx/store'
import {IPaginationOptions} from '../../models/General'

export const ACTION_PAGINATION_OPTIONS = createAction(
  'FETCH_PAGINATION_OPTIONS',
  props<{paginationOptions: IPaginationOptions}>()
)

