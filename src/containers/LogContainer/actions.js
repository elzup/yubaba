// @flow
import type { Log } from '../../types'

import { RECEIVE_LOG, RECEIVE_LOGS } from './actionTypes'
import type { ReceiveLog, ReceiveLogs } from './actionTypes'

export function receiveLog(log: Log): ReceiveLog {
	return {
		type: RECEIVE_LOG,
		log,
	}
}
export function receiveLogs(logs: Log[]): ReceiveLogs {
	return {
		type: RECEIVE_LOGS,
		logs,
	}
}
