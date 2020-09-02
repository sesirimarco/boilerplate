export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_OUT = 'SIGN_OUT';
export const IS_LOGGED = 'IS_LOGGED';
export const IS_SIGNING = 'IS_SIGNING';

export const NEW_MESSAGE = 'NEW_MESSAGES';

export const signIn = (username, pass, history) => {
	return (dispatch) => {
		dispatch({ type: IS_SIGNING });
		setTimeout(() => {
			if (username === 'username' && pass === 'username') {
				dispatch({
					type: SIGN_IN,
					payload: {
						username: 'Username',
						urlThumb: 'https://picsum.photos/200',
					},
				});
				history.push('/');
				//dispatch({ type: REDIRECT_TO, route: '/' });
			}else {
				dispatch({
					type: SIGN_IN_ERROR,
					payload: {
						message: 'Login Error.',
						code: '500',
					},
				});
			};
			
		}, 1000);
	};
};
export const signOut = (history) => {
	return (dispatch) => {
		dispatch({ type: IS_SIGNING });
		setTimeout(() => {
			dispatch({
				type: SIGN_OUT,
				payload: null,
			});
			history.push('/')
			//dispatch({ type: REDIRECT_TO, route: '/' });
		}, 1000);
	};
};
export const isLogged = () => {
	return (dispatch) => {
		dispatch({ type: IS_SIGNING });
		setTimeout(() => {
			dispatch({
				type: IS_LOGGED,
				payload: null,
			});
		}, 3000);
	};
};
