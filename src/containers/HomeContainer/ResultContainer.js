// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { JudgeWithResult } from 'nicename/dist/types'
import ResultBox from '../../components/ResultBox'

import type { State } from '../../types'
import * as selectors from './selectors'

type OProps = {
	id: string,
}

type Props = {
	id: string,
	judge: JudgeWithResult[],
}

const Container = (props: Props) => (
	<div>
		{props.judge.map(j => (
			<ResultBox key={j.info.id} name={props.id} result={j} />
		))}
	</div>
)

const ms = (state: State, op: OProps) => ({
	id: op.id,
	judge: selectors.getResult(state),
})

const conn = connect(ms, {})

export default conn(Container)
