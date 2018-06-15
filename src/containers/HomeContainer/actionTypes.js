// @flow
export const UPDATE_ID: 'HomeContainer/UPDATE_ID' = 'HomeContainer/UPDATE_ID'

export const Actions = {
	UPDATE_ID,
}

export type UpdateId = {
	type: typeof UPDATE_ID,
	id: string,
}

export type Action = UpdateId
