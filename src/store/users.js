import { createSlice } from '@reduxjs/toolkit'
import { lastIndexOf } from 'lodash'

const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    //action => action handler
    userAdded (users, action) => {
      users.push({
        id: ++lastIndexOf,
        name: action.payload.name
      })
    }
  }
})

export const { userAdded } = slice.actions

export default slice.reducer