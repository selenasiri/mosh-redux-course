import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import logger from './middleware/logger'

export default function () {
  return (store = configureStore({
    reducer,
    middleware: [logger],
  }))
}
