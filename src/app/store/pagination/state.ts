import {IPaginationOptions} from '../../models/General'

export interface IStatePagination {
  paginationOptions: IPaginationOptions
}

export const initialState: IStatePagination = {
  paginationOptions: {} as IPaginationOptions
}
