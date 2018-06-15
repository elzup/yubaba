// @flow
import { combineReducers } from './config'
import HomeContainer from './containers/HomeContainer/reducer'
import LogContainer from './containers/LogContainer/reducer'
import Network from './containers/Network/reducer'

export default combineReducers({
	HomeContainer,
	LogContainer,
	Network,
})
