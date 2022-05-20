import {IUser} from '../../models/User'

export interface IStateUser {
  users: IUser[]
  usersLoading: boolean
  isLoading: boolean
  error: any
  status: string
}

export const initialState: IStateUser = {
  users: [] as IUser[],
  usersLoading: false,
  isLoading: false,
  error: null,
  status: ''
}
