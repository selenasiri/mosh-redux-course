import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    //actions => action handlers
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id ===bugId)
      bugs[index]userId = userId;
    }

    bugAdded: (state, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      })
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id)
      bugs[index].resolved = true
    },
  },
})

export const {bugAdded, bugResolved, bugAssignedToUser } = slice.action
export default slice.reducer

console.log(slice)

// // Action creators
export const bugAdded = createAction('bugAdded')
export const bugResolved = createAction('bugResolve')
export const bugRemoved = createAction('bugRemoved')

// //Memoization
// //bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === ???)
)