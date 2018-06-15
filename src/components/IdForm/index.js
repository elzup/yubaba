// @flow
import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

type Props = {
	handleSubmit: ({ id: string }) => void,
}

class IdForm extends React.Component<Props> {
	idRef: ?HTMLInputElement

	onSubmit = () => {
		if (!this.idRef) {
			return
		}
		this.props.handleSubmit({ id: this.idRef.value })
	}

	render() {
		return (
			<form action="" onSubmit={this.onSubmit}>
				<TextField
					id="interval"
					label="ID"
					type="text"
					inputRef={r => {
						this.idRef = r
					}}
					inputProps={{ 'data-test': 'event-interval-time-input' }}
					data-test="id-input"
				/>
				<Button onClick={this.onSubmit} />
			</form>
		)
	}
}

export default IdForm
