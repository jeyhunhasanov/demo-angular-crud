import {IUser} from '../../models/User'

export interface IStateUser {
  users: IUser[]
  isLoading: boolean
  error: any
  status: string
}

export const initialState: IStateUser = {
  users: [] as IUser[],
  isLoading: false,
  error: null,
  status: ''
}
