import { Route, Switch } from 'react-router-dom';
import Counter from './pages/Counter';
import Home from './pages/Home'


export default function Routes() {

	return (

		<>

			<Switch>
				<Route path="/counter"><Counter /></Route>
				<Route path="/" ><Home /></Route>
			</Switch>

		</>
	);
}