// @flow
import type { State, Log } from '../../types'

export function getLogs(state: State): Log[] {
	return state.LogContainer
}
