// @flow
import { UPDATE_ID } from './actionTypes'
import type { UpdateId } from './actionTypes'

export function updateId(id: string): UpdateId {
	return {
		type: UPDATE_ID,
		id,
	}
}
