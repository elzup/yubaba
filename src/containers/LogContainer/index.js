// @flow
import { withRouter, type RouterHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as React from 'react'
import Button from '@material-ui/core/Button'

import type { State, Log } from '../../types'
import * as actions from './actions'
import * as selectors from './selectors'

type Props = {
	history: RouterHistory,
	logs: Log[],
	receiveLog: typeof actions.receiveLog,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<ul>
				{props.logs.map(log => (
					<li>
						<Button
							onClick={() => {
								props.history.push(`/${log.id}`)
							}}
						>
							{log.id}
						</Button>
					</li>
				))}
			</ul>
		)
	}
}

const ms = (state: State) => {
	return {
		logs: selectors.getLogsRecent(state),
	}
}

const conn = connect(ms, {
	receiveLog: actions.receiveLog,
})

export default conn(withRouter(Container))
