
import { 
    GET_MY_COOPS_REQUEST,
    GET_MY_COOPS_SUCCESS,
    GET_MY_COOPS_FAIL, 

    GET_COOP_DETAIL_REQUEST,
    GET_COOP_DETAIL_SUCCESS,
    GET_COOP_DETAIL_FAIL,

    SEARCH_COOP_SUCCESS,
    SEARCH_COOP_REQUEST,
    SEARCH_COOP_FAIL,
    SEARCH_COOP_RESET
 } from './../constants/myCoopConstants';



export const getMyCoopReducer = (state = {}, action) => {
  

    console.log("###### dummy reducer #####", action.payload,typeof(action.payload))
    console.log("###### dummy Reducer #####", state)

    switch (action.type) {

        case GET_MY_COOPS_REQUEST:
            return { loading: true}

        case GET_MY_COOPS_SUCCESS:
           
            return { loading: false, success:true,coops:action.payload }
  

        case GET_MY_COOPS_FAIL:
            return { loading: false, error: action.payload }

        // case DUMMY_RESET:
        //     return {}

        default:
            return state
    }
}


//  ############################# Detail Chicken Reducer ###################3


export const coopDetailReducers = (state = {}, action) => {
   
    console.log("Detail Reducers ... ",action)

    switch (action.type) {
        case GET_COOP_DETAIL_REQUEST:
            
            return { loading: true}

        case GET_COOP_DETAIL_SUCCESS:
            
            return { loading: false, coop: action.payload }

        case GET_COOP_DETAIL_FAIL:
            return { loading: false, error: action.payload }


        default:
            return state
    }
}


//  ########################### SEARCH COOP REDUCER ###################
export const searchCoopReducer = (state = {}, action) => {
   
    console.log("Detail Reducers ... ",action)

    switch (action.type) {
        case SEARCH_COOP_REQUEST:
            
            return { loading: true}

        case SEARCH_COOP_SUCCESS:
            
            return { loading: false, searchResult: action.payload }

        case SEARCH_COOP_FAIL:
            return { loading: false, error: action.payload }

        case SEARCH_COOP_RESET:
            return {}

        default:
            return state
    }
}
