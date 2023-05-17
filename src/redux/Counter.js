const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementbyvalue";

const initialState = {
    count: 0,
};
export const increment = () => ({
    type: INCREMENT,
});
export const decrement = () => ({
    type: DECREMENT,
});
export const incrementByValue = (value) => ({
    type: INCREMENTBYVALUE,
    payload: value,
});

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1,
            };
        case "decrement":
            return {
                ...state,
                count: state.count - 1,
            };
        case "incrementbyvalue":
            return {
                ...state,
                count: state.count + action.payload,
            };
        default:
            return state;
    }
}
export default counterReducer;
