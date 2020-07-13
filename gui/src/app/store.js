import { createStore , combineReducers } from 'redux'



const changeState = (state = {sidebarShow: 'responsive'} ,{ type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  changeState,
})



const store = createStore(rootReducer)
export default store