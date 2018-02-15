import {
    REQUEST_MATTERS,
    RECEIVE_MATTERS,
    REQUEST_MATTER,
    RECEIVE_MATTER,
} from '../actions';
 
const matters = (state = {
    isFetching: false,
    all:[],
    current:{}
}, action) => {
    switch (action.type) {
    case REQUEST_MATTERS:
        return {
            ...state,
            isFetching: true,
        };
    case RECEIVE_MATTERS:
        return {
            ...state,
            isFetching: false,
            all: action.matters,
            receivedAt:action.receivedAt
        };
    case REQUEST_MATTER:
        return {
            ...state,
            isFetching: true,
        };
    case RECEIVE_MATTER:
        return {
            ...state,
            isFetching: false,
            current:action.matter,
            receivedAt:action.receivedAt
        };
    default:
        return state;
    }
};
 
export default matters;