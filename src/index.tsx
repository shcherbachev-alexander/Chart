import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/commons/reset.css'
import './css/commons/fonts.css'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
