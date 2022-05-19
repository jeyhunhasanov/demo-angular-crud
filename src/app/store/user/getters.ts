import {IStateUser} from './state'
import {IUser} from '../../models/User'

export const Getters = {
  users: (state: IStateUser): IUser[] => state.users,
  isLoading: (state: IStateUser): boolean => state.isLoading,
  error: (state: IStateUser): any => state.error
}

