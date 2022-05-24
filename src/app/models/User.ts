export interface IUser {
  id?: string
  name?: string | null
  email?: string
  gender?: string
  status?: string
}

export interface IUserQueryParams extends IUser {
  page?: number
}
