import { configureStore } from '@reduxjs/toolkit'
import modal from './modal'
import allDataProcess from './data'

const store = configureStore({
  reducer: {
    modal,
    allDataProcess
  }
})

export default store
