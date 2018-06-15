// @flow
import type { Action, Log } from '../../types'
import { Actions } from './actionTypes'

export type State = Log[]

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_LOGS:
			return action.logs

		case Actions.RECEIVE_LOG:
			return [...state, action.log]

		default:
			return state
	}
}
