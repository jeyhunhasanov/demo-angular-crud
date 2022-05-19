import {IUser} from '../../models/User'

export interface IStateUser {
  users: IUser[]
  isLoading: boolean
  error: any
}

export const initialState: IStateUser = {
  users: [] as IUser[],
  isLoading: false,
  error: null
}
