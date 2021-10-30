import { Route, Switch } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home'
import Tracking from './pages/Tracking';


export const Routes = () => {

	return (
		<>

			{

			}
			<Switch>
				<Route path="/tracking"><Tracking /></Route>
				<Route path="/chat"><Chat /></Route>
				<Route path="/" ><Home /></Route>
			</Switch>
		</>
	);
}