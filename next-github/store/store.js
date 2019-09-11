import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  count: 0
}

const userInitialState = {
  username: 'jack',
  age: 18
}

const ADD = 'ADD'
function countReducer(state = initialState, action) {
  console.log(state, action)
  switch (action.type)  {
    case ADD:
      return { count: state.count + (action.num || 1) }
    default:
      return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state = userInitialState, action) {
  switch(action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name
      }
    default:
      return state
  }
}

const allReducers = combineReducers({
  counter: countReducer,
  user: userReducer
})

const store = createStore(
  allReducers, 
  {
    counter: initialState,
    user: userInitialState
  },
  composeWithDevTools(applyMiddleware(ReduxThunk))
)

// action creatore
// 同步的dispatch
export function add(num) {
  return {
    type: ADD,
    num
  }
}

// 异步的dispatch
function addAsync(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 1000)
  }
}

// console.log(store)
// console.log(store.getState())
store.dispatch(add(3))
store.subscribe(() => { // 
  console.log(store.getState())
})
store.dispatch(addAsync(5))

// store.dispatch({ type: ADD })
store.dispatch({ type: UPDATE_USERNAME, name: 'lilei' })

export default function initializeStore(state) {
  const store = createStore(
    allReducers, 
    Object.assign({}, {
      counter: initialState,
      user: userInitialState
    }, state),
    // {
    //   counter: initialState,
    //   user: userInitialState
    // },
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}