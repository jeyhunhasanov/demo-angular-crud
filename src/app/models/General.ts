export interface IPaginationOptions {
  pageSize: number
  pageIndex: number
  length: number
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
