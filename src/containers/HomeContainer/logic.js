// @flow
import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'

import moment from 'moment'

export function registerId(id: string): ThunkAction {
	return async (dispatch, getState) => {
		// const logs = selectors.getLogs(getState())
		await dispatch(actions.updateId(id))
		const log = {
			id,
			createdAt: moment().format(),
		}
		await dispatch(logActions.receiveLog(log))
	}
}
