import { 
    NEW_MESSAGE
} from '../actions';

const intialState = {
    title: '',
    body: '',
    isLoading: false,
};
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                isLoading: false,
                message: {
                    title: action.payload.title,
                    body: action.payload.body,
                    
                }
            };
        default:
            return state;
    }
};

export default reducer;