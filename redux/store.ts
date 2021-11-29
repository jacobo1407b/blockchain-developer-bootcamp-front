import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

type Action = {
    type: string;
    payload: any;
}
type State = {
    login: boolean;
    user: {
        name: string;
        id: string;
        username: string;
        address: string;
        logo: string;
        nameimg: string;
    }
}
const initialState: State = {
    login: false,
    user: {
        id: "",
        name: "",
        username: "",
        address: "",
        logo: "",
        nameimg: "",
    }
}
function updateState(state = initialState, action: Action) {
    switch (action.type) {
        case "SESION":
            return {
                ...state,
                login: action.payload,
            };
        case "USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
}

const store = createStore(
    updateState,
    composeWithDevTools()
);

export default store;