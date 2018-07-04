import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/IconButton'

import CodeIcon from '@material-ui/icons/Code'
import ContactIcon from '@material-ui/icons/AssignmentInd'

function SimpleAppBar(props: { doLogout: Function }) {
	return (
		<div>
			<AppBar position="static" color="primary">
				<Toolbar color="inherit">
					<Typography variant="title" color="inherit" style={{ flex: 1 }}>
						Yubaba
					</Typography>
					<div>
						<Button
							color="inherit"
							href="https://github.com/elzup/texter"
							target={'_blank'}
						>
							<CodeIcon />
						</Button>
						<Button
							color="inherit"
							href="https://twitter.com/_elzup_"
							target={'_blank'}
						>
							<ContactIcon />
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SimpleAppBar
