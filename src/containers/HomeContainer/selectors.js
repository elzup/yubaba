// @flow

import type { State } from '../../types'

export function getId(state: State): string {
	return state.HomeContainer.id
}
