import { FORM_PROJECT, GET_PROJECT } from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload
            }
        default:
            break;
    }
} 