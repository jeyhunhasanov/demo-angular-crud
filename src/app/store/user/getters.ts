import {IStateUser} from './state'
import {IUser} from '../../models/User'

export const Getters = {
  users: (state: IStateUser): IUser[] => state.users,
  usersLoading: (state: IStateUser): boolean => state.usersLoading,
  isLoading: (state: IStateUser): boolean => state.isLoading,
  error: (state: IStateUser): any => state.error,
  status: (state: IStateUser): any => state.status
}

