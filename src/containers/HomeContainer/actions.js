// @flow
import { UPDATE_JUDGE } from './actionTypes'
import type { UpdateJudge } from './actionTypes'

export function updateJudge(id: string, judge: any): UpdateJudge {
	return {
		type: UPDATE_JUDGE,
		id,
		judge,
	}
}
