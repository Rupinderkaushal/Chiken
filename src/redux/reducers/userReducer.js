
import { GET__USER__ACCOUNT__REQUEST,
    GET__USER__ACCOUNT__SUCCESS,
     GET__USER__ACCOUNT__FAIL,
     GET__USER__ACCOUNT__RESET 
    } from './../constants/userConstants';

export const userReducer = (state = {}, action) => {
   
    console.log("Detail Reducers ... ",action)

    switch (action.type) {
        case GET__USER__ACCOUNT__REQUEST:
            
            return { loading: true}

        case GET__USER__ACCOUNT__SUCCESS:
            
            return { loading: false, user: action.payload }

        case GET__USER__ACCOUNT__FAIL:
            return { loading: false, error: action.payload }

        case GET__USER__ACCOUNT__RESET:
            return {}

        default:
            return state
    }
}
