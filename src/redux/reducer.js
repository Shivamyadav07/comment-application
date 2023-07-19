import { GET_COMMENT_FAILURE, GET_COMMENT_REQUEST, GET_COMMENT_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    post: [],
    comment: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: action.payload,
                isError: false
            }
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comment: action.payload,
                isError: false
            }
        case GET_COMMENT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}