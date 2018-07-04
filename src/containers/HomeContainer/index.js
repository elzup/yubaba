// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { type Match, type RouterHistory } from 'react-router-dom'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LogContainer from '../LogContainer'
import NavBar from '../NavBarContainer'
import IdForm from './IdForm'
import ResultContainer from './ResultContainer'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	match: Match,
	history: RouterHistory,
}

type Props = {
	id: string,
	updateId: typeof logics.updateId,
}

class Container extends React.Component<Props> {
	componentWillReceiveProps(nextProps) {
		this.props.updateId({ id: nextProps.id })
	}
	render() {
		const { props } = this
		// props.history.push({ search: `?day=${day}` })
		return (
			<div>
				<NavBar />
				<Grid container justify="center" style={{ marginBottom: '100px' }}>
					<Grid item xs={12} md={10}>
						<Paper>
							<Typography variant="body1">
								Yubaba は新しく ID (SNS アカウントID など)
								を作る人のためのツールです。評価基準を提供します。<br />
								※すでに自分のIDを持っている人のIDを評価するためのものではありません。
							</Typography>
							<IdForm id={props.id} />
							<a
								href="https://namechk.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								すでに取られてないかチェック - namechk.com ↗
							</a>
							<LogContainer />
							<ResultContainer id={props.id} />
						</Paper>
					</Grid>
				</Grid>
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	const id = op.match.params.id || ''
	return { id }
}

const conn = connect(ms, { updateId: logics.updateId })

export default conn(Container)
