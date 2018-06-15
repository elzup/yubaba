// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import HomeContainer from '../HomeContainer'

// const PreComp = (props: any) => <div>{JSON.stringify(props)}</div>

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={HomeContainer} />
			<Route exact path="/:id" component={HomeContainer} />
		</Switch>
	</Router>
)
export default RouteApp
