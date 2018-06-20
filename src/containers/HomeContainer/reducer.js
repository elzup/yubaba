// @flow
import type { Action, Home } from '../../types'
import { Actions } from './actionTypes'

export type State = Home

export const initialState: State = { id: 'shimarin', judge: [] }

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_JUDGE:
			return {
				...state,
				id: action.id,
				judge: action.judge,
			}

		default:
			return state
	}
}
