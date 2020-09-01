import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import store from './store';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Routes />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
