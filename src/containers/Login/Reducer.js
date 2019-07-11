import * as actionTypes from "./ActionTypes";

const initialState = {
    logged: false
};

const reducer = (state = initialState, action) => {
    let newState;;
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log(action);
            newState = state;
            break;
        default:
            return state;
    }
    return newState;
}

export default reducer;