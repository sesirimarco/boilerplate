import { 
	IS_LOGGED, 
	IS_SIGNING, 
	SIGN_IN, 
	SIGN_OUT,
} from '../actions';

const intialState = {
	user: null,
	isLogged: false,
	isLoading: false,
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				isLoading: false,
				user: action.payload,
				isLogged: action.payload ? true : false,
			};
		case SIGN_OUT:
			return {
				...state,
				isLoading: false,
				user: action.payload,
				isLogged: false,
			};
		case IS_LOGGED:
			return {
				...state,
				isLoading: false,
				user: action.payload,
				isLogged: action.payload ? true : false,
			};
		case IS_SIGNING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return state;
	}
};

export default reducer;
