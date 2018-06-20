// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, type RouterHistory } from 'react-router-dom'
import IdForm from '../../components/IdForm'

import type { State } from '../../types'
// import * as selectors from './selectors'
import * as logics from './logic'

type OProps = {
	id: string,
	history: RouterHistory,
}

type Props = {
	id: string,
	history: RouterHistory,
	logId: typeof logics.logId,
	handleLike: Function,
}

const Container = (props: Props) => (
	<IdForm
		{...props}
		handleChange={({ id }) => {
			props.history.push(id)
		}}
	/>
)

const ms = (state: State, op: OProps) => {
	return { ...op }
}

const conn = connect(ms, { handleLike: logics.logId })

export default withRouter(conn(Container))
