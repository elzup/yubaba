import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function SimpleAppBar(props: { doLogout: Function }) {
	return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar color="inherit">
					<Typography variant="title" color="inherit" style={{ flex: 1 }}>
						Yubaba
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SimpleAppBar
