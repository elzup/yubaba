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

const C = (props: Props) => (
	<ul>
		{props.logs.map((log, i) => (
			<li key={log.id}>
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

class Container extends React.Component<Props> {
	render() {
		return C(this.props)
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
