// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import type { JudgeWithResult } from 'nicename/dist/types'

import type { State } from '../../types'
import * as selectors from './selectors'

type Props = {
	id: string,
	judge: JudgeWithResult,
}

const Container = (props: Props) => <div>{JSON.stringify(props.judge)}</div>

const ms = (state: State) => {
	return {
		judge: selectors.getResult(state),
	}
}

const conn = connect(ms, {})

export default conn(Container)
