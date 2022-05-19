import {IStatePagination} from './state'
import {IPaginationOptions} from '../../models/General'

export const Getters = {
  paginationOptions: (state: IStatePagination): IPaginationOptions => state.paginationOptions
}

