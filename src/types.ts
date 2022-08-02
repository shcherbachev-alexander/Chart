export const SET_LIST = 'SET_LIST'

export type dataTypes = {
  list: {
    name: string
    time: number
  }[]
}

export type itemType = {
  name: string
  time: number
  sum: number
  leftPadding: number
}

export type ACTION_TYPES_TS = {
  type: string
  payload: {
    list: {
      name: string
      time: number
    }[]
  }
}
