import { INCREMENT, DECREMENT } from "../action-types";

const initialState = {
    count : 0
}

const countOfReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: action.payload
            }
            case DECREMENT:
                return {
                    ...state, count: action.payload
                }
        default:
            return state;
    }
}

export default countOfReducer;