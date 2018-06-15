// @flow
import type { Action, Home } from '../../types'
import { Actions } from './actionTypes'

export type State = Home

export const initialState: State = { id: 'shimarin' }

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_ID:
			return {
				id: action.id,
			}

		default:
			return state
	}
}
