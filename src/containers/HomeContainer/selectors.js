// @flow

import type { State } from '../../types'

export function getId(state: State) {
	return state.HomeContainer.id
}

export function getResult(state: State) {
	return state.HomeContainer.judge
}
