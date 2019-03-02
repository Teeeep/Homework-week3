import { ADD_MODEL } from "../actions/addModel";

const reducer = (state = [], action = {}) => {
    // console.log(state, action.payload)
    switch (action.type) {
        case ADD_MODEL:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default reducer