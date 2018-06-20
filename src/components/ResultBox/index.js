// @flow
import * as React from 'react'
import type { JudgeWithResult, Hint } from 'nicename/dist/types'
import Typography from '@material-ui/core/Typography'
import _ from 'lodash'

type Props = {
	name: string,
	result: JudgeWithResult,
}

function toHilightPositions(hints: Hint[]): number[] {
	const rangeMap = v => v.map(h => _.range(h.start, h.last + 1))
	return _.sortBy(_.uniq(_.flatten(rangeMap(hints))))
}
const hitStyle = {
	background: 'red',
}

const ResultBox = ({ name, result }: Props) => {
	const hilights = toHilightPositions(result.result.hints)
	return (
		<div>
			<div style={{ display: 'flex' }}>
				<Typography variant="title">{result.info.description}</Typography>
				<Typography variant="title">{result.result.rank}</Typography>
			</div>
			<Typography variant="body1">{result.info.notice}</Typography>
			<Typography variant="title">
				{name.split('').map((c, i) => (
					<span key={i} style={hilights.includes(i) ? hitStyle : {}}>
						{c}
					</span>
				))}
			</Typography>
		</div>
	)
}

export default ResultBox
