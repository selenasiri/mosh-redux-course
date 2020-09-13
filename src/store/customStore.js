import reducer from './reducer'

function createStore(reducr) {
  let state
  let listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }
  //when we subscribe, we'll push this listener to our (above) array of listeners

  function dispatch(action) {
    //Call the reducer to get the new state
    state = reducer(state, action)
    //Notify the subscriber
    for (let i = 0; i < listeners.length; i++) listeners[i]()
  }

  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState,
  }
}

export default createStore()
