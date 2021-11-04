import { combineReducers } from "redux";

function form(state = {}, action:any) {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                [action.name]: action.value
            };
        case "DEFAULT_VALUE": {
            return {
                ...state,
                [action.name]: action.defaultValue
            };
        }
        default:
            return state;
    }
}

const reducer = combineReducers({
    form
});

export default reducer;
