import { combineReducers } from 'redux'
import { dataReducer } from './data'

export const rootReducer = combineReducers({ dataReducer })

export type RootState = ReturnType<typeof rootReducer>
