
import { GET__USER__ACCOUNT__REQUEST,
        GET__USER__ACCOUNT__SUCCESS,
        GET__USER__ACCOUNT__FAIL
} from './../constants/userConstants';

export const userAction = (info) => async (dispatch) => {
    try {
   

        dispatch({ type: GET__USER__ACCOUNT__REQUEST })

        // const { data } = await axios.get(`/api/products/${id}`)

      
        dispatch({
            type: GET__USER__ACCOUNT__SUCCESS,
            payload: info
        })


    } catch (error) {
        dispatch({
            type: GET__USER__ACCOUNT__FAIL,
            payload : "something went wrong"
            // payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}