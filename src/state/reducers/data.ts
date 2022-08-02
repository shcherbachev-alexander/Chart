import { dataTypes, ACTION_TYPES_TS, SET_LIST } from '../../types'

const initialState: dataTypes = {
  list: [
    { name: 'Landing Page', time: 7.4 },
    { name: 'Configurator', time: 0.2 },
    { name: 'Check-out', time: 7.0 },
    { name: 'Deal', time: 3.8 },
  ],
}

export const dataReducer = (state = initialState, action: ACTION_TYPES_TS): dataTypes => {
  switch (action.type) {
    case SET_LIST:
      return {
        list: action.payload.list,
      }
    default:
      return state
  }
}
