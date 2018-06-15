// @flow
import type { State as HomeContainer } from '../containers/HomeContainer/reducer'
import type { State as LogContainer } from '../containers/LogContainer/reducer'
import type { State as Network } from '../containers/Network/reducer'

export type State = {
	HomeContainer: HomeContainer,
	LogContainer: LogContainer,
	Network: Network,
}
