// @flow
import _ from 'lodash'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import * as logActions from '../LogContainer/actions'
import * as logSelectors from '../LogContainer/selectors'

import moment from 'moment'

export function registerId(id: string): ThunkAction {
	return async (dispatch, getState) => {
		const logs = logSelectors.getLogs(getState())
		_.remove(logs, { id })
		const log = {
			id,
			createdAt: moment().format(),
		}
		await dispatch(actions.updateId(id))
		await dispatch(logActions.receiveLogs([...logs, log]))
	}
}
