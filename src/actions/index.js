export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const IS_LOGGED = 'IS_LOGGED';
export const IS_SIGNING = 'IS_SIGNING';

export const NEW_MESSAGE = 'NEW_MESSAGES';

export const signIn = () => {
	return (dispatch) => {
		dispatch({ type: IS_SIGNING });
		setTimeout(() => {
			dispatch({
				type: SIGN_IN,
				payload: {
					username: 'Nickname',
					urlThumb: 'https://picsum.photos/200',
				},
			});
		}, 1000);
	};
};
export const signOut = () => {
	return (dispatch) => {
		dispatch({ type: IS_SIGNING });
		setTimeout(() => {
			dispatch({
				type: SIGN_OUT,
				payload: null,
			});
		}, 1000);
	};
};
export const isLogged = () => {
	return (dispatch) => {
		dispatch({ type: IS_SIGNING });
		setTimeout(() => {
			dispatch({
				type: IS_LOGGED,
				payload: {
					username: 'Nickname',
					urlThumb: 'https://picsum.photos/200',
				},
			});
		}, 3000);
	};
};
