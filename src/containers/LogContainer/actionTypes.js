// @flow
import type { Log } from '../../types'

export const RECEIVE_LOG: 'LogContainer/RECEIVE_LOG' =
	'LogContainer/RECEIVE_LOG'
export const RECEIVE_LOGS: 'LogContainer/RECEIVE_LOGS' =
	'LogContainer/RECEIVE_LOGS'

export const Actions = {
	RECEIVE_LOG,
	RECEIVE_LOGS,
}

export type ReceiveLog = {
	type: typeof RECEIVE_LOG,
	log: Log,
}

export type ReceiveLogs = {
	type: typeof RECEIVE_LOGS,
	logs: Log[],
}

export type Action = ReceiveLog | ReceiveLogs
