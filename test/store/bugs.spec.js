import { addBug, bugAdded } from '../../src/store/bugs'
import { apiCallBegan } from '../../src/store/api'

describe('bugsSlice', () => {
  describe('action creators', () => {
    it('addBug', () => {
      const bug = addBug({ description: 'a' })
      const result = addBug(bug)
      const expected = {
        type: apiCallBegan.type,
        payload: {
          url: '/bugs',
          method: 'post',
          data: bug,
          onSuccess: bugAdded.type,
        },
      }

      expect(result).toEqual(expected)
    })
  })
})
