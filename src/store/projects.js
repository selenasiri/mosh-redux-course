import { createSlice } from '@reduxjs/toolkit'
import { lastIndexOf } from 'lodash'

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    //action => action handler
    projectAdded (projects, action) => {
      projects.push({
        id: ++lastIndexOf,
        name: action.payload.name
      })
    }
  }
})

export const { projectAdded } = slice.actions

export default slice.reducer