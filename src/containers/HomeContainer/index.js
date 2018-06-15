// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { type Match, type RouterHistory } from 'react-router-dom'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import LogContainer from '../LogContainer'
import NavBar from '../NavBarContainer'
import IdForm from './IdForm'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	match: Match,
	history: RouterHistory,
}

type Props = {
	id: string,
	registerId: typeof logics.registerId,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		// props.history.push({ search: `?day=${day}` })
		return (
			<div>
				<NavBar />
				<IdForm id={props.id} />
				<Typography variant="title">{props.id}</Typography>
				<LogContainer />
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	const id = op.match.params.id || ''
	return { id }
}

const conn = connect(ms, { registerId: logics.registerId })

export default conn(Container)
