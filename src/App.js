import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import ResultsList from './components/ResultsList'
import InputForm   from './components/InputForm'

import './App.css'

const initialState = window.__INITIAL_STATE__ || { firebase: { authError: null } }
const store = configureStore(initialState)


export default () => (
  <Provider store={store}>
    <div>
      <InputForm />
      <ResultsList />
    </div>
  </Provider>
)
