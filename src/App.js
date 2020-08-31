import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
import './App.scss';

class App extends Component {
	render() {
		return(
			<div className ="app">
				<Route path="/:subpath" component={Header}/>
				<Main />
				<Footer />
			</div>
		);
	};
};
/*function App() {
	const user = useSelector((state) => state.auth.user);
	const isLoading = useSelector((state) => state.auth.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(isLogged());
	}, []);
	return (
		<div className="App container pt-4">
			<h1 className="text-center mb-4">Boilerplate</h1>
			<div className="col-6 text-center">
				<div className="form-row mt-3">
					<input className="form-control col" type="text" />
					<button className="btn btn-custom-color ml-2">Custom button</button>
					<Button variant="custom-color">REACT-Bootstrap</Button>
				</div>
			</div>
			{isLoading && <Loading isLoading={isLoading} />}
			{user && <p> USER: {user.username}</p>}
		</div>
	);
}
*/
export default App;
