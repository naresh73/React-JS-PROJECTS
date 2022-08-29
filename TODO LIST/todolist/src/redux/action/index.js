import { INCREMENT, DENCREMENT } from "../action-types"

export const incrementCount = (currentCount) => {
    return {
        type: INCREMENT,
        payload: currentCount + 1
    };
};

export const decrementCount = (currentCount) => {
    return {
        type: DENCREMENT,
        payload: currentCount - 1
    };
};
