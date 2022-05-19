export interface IPaginationOptions {
  limit: number
  page: number
  pages: number
  total: number
}

export interface IUseStore {
  type: string
  payload?: any
}

export interface IUseStoreAction extends IUseStore {
  actionName: any
}

export interface IUseStoreSelector {
  selectorName: any
}
