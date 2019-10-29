import React from "react";
import {BrowserRouter, HashRouter,  Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from "../components/Main";

const history = createBrowserHistory()

const appRouter = () => {
	const paths = () => (
		<Switch>
			<Route path="/" component={Main} exact={true}/>
		</Switch>
	);

	const productionBuild = () => (
		<HashRouter history={history}>
			{paths()}	
		</HashRouter>
	);

	const developmentBuild = () => (
		<BrowserRouter>
			{paths()}
		</BrowserRouter>
	)

	return(
		<div>
			{productionBuild()}
		</div>
	);
} 

export default appRouter;