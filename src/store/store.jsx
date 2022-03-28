import {createStore} from 'redux'
import counterReducer from './reducers/counterReducer'

const allReducers = combineReducers({counterReducer})

const store = createStore(allReducers)

export {store}