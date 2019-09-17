import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import axios from 'axios'

const userInitialState = {}

const LOGOUT = 'LOGOUT'

function userReducer(state = userInitialState, action) {
  switch(action.type) {
    case LOGOUT: {
      return {}
    }
    default:
      return state
  }
}

const allReducers = combineReducers({
  user: userReducer
})

// action creators
export function logout() {
  return dispatch => {
    axios.post('/logout')
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: LOGOUT
          })
        } else {
          console.log('logout faild', res)
        }
      }).catch(err => {
        console.log('logout faild', err)
      })
  }
}


export default function initializeStore(state) {
  const store = createStore(
    allReducers, 
    Object.assign({}, {
      user: userInitialState
    }, state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}