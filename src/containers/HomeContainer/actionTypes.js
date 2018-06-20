// @flow
export const UPDATE_JUDGE: 'HomeContainer/UPDATE_JUDGE' =
	'HomeContainer/UPDATE_JUDGE'

export const Actions = {
	UPDATE_JUDGE,
}

export type UpdateJudge = {
	type: typeof UPDATE_JUDGE,
	id: string,
	judge: any,
}

export type Action = UpdateJudge
