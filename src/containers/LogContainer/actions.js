// @flow
import type { Log } from '../../types'

import { RECEIVE_LOG } from './actionTypes'
import type { ReceiveLog } from './actionTypes'

export function receiveLog(log: Log): ReceiveLog {
	return {
		type: RECEIVE_LOG,
		log,
	}
}
