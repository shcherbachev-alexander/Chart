import { SET_LIST } from '../../types'

export const setList: any = (list: any) => ({
  type: SET_LIST,
  payload: {
    list,
  },
})
