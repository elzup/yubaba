// @flow
import * as React from 'react'
import type { JudgeWithResult } from 'nicename/dist/types'
import Typography from '@material-ui/core/Typography'

type Props = {
	name: string,
	result: JudgeWithResult,
}

const ResultBox = ({ name, result }: Props) => (
	<div>
		<Typography variant="title">{result.info.description}</Typography>
		<Typography variant="body1">{result.info.notice}</Typography>
		<Typography variant="title">{name}</Typography>
		<Typography variant="title">{result.result.rank}</Typography>
	</div>
)

export default ResultBox
