// @flow
import type { Log } from '../../types'

export const RECEIVE_LOG: 'LogContainer/RECEIVE_LOG' =
	'LogContainer/RECEIVE_LOG'

export const Actions = {
	RECEIVE_LOG,
}

export type ReceiveLog = {
	type: typeof RECEIVE_LOG,
	log: Log,
}

export type Action = ReceiveLog
