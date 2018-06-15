// @flow
import _ from 'lodash'

import type { State, Log } from '../../types'

export function getLogs(state: State): Log[] {
	return state.LogContainer
}
export function getLogsRecent(state: State): Log[] {
	return _.slice(getLogs(state), -3)
}
