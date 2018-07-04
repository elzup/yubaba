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
	overrides: {
		MuiPaper: {
			root: {
				padding: '10px',
				marginTop: '20px',
				marginBottom: '20px',
			},
		},
		MuiAppBar: {
			root: {
				padding: 0,
				margin: 0,
			},
		},
	},
})
export default theme
