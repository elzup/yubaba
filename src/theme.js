// @flow

import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
// import lime from '@material-ui/core/colors/lime'

const theme = createMuiTheme({
	palette: {
		primary: { ...purple, main: purple[900] },
		// secondary: lime,
	},
	typography: {
		display1: {
			padding: '20px',
		},
		title: {
			padding: '10px',
		},
	},
	paper: {
		padding: '10px',
	},
	tableCell: {
		textAlign: 'center',
	},
})
export default theme
