
import { GET_MY_COOPS_REQUEST, 
        GET_MY_COOPS_SUCCESS,
        GET_MY_COOPS_FAIL, 

        GET_COOP_DETAIL_REQUEST, 
        GET_COOP_DETAIL_SUCCESS,
        GET_COOP_DETAIL_FAIL,

        SEARCH_COOP_SUCCESS,
        SEARCH_COOP_REQUEST,
        SEARCH_COOP_FAIL

     } from '../constants/myCoopConstants';
import thumbnail from "./../../assests/images/chicken-thumbnail.png";

{/* <MyCoopComponent id={1} img={thumbnail} name="Flight" dorking="Dorking" talent="Talent" spicy="Spicy" /> */}

function createObjectData(id,name,img,dorking,talent,spicy) {
    return {id, name, img, dorking,talent,spicy };   // create object
  }
 
  const rows = [
    createObjectData(1,"Flight",thumbnail,"Dorking","Talent","Spicy"),
    createObjectData(2,"Flock",thumbnail,"Dorking","Talent","Spicy"),

    createObjectData(3,"fringi",thumbnail,"Dorking","Talent","Spicy"),
    createObjectData(4,"Flight",thumbnail,"Dorking","Talent","Spicy"),
    createObjectData(5,"demo",thumbnail,"Dorking","Talent","Spicy"),
    createObjectData(6,"demo",thumbnail,"Dorking","Talent","Spicy"),
    createObjectData(7,"Flight",thumbnail,"Dorking","Talent","Spicy"),
  ];  

export const getMyCoopsAction = () => async (dispatch, getState) => {

    try {

        dispatch({
            type: GET_MY_COOPS_REQUEST
        })

      

        // const { data } = await axios.post(`/api/add-order/`,cartItems)
        // console.log("#### cartItems in AddOrder Actoin ###", cartItems)
        // const { data } = await axios.post("api/orders/addorderItem", order, config)


        dispatch({
            type: GET_MY_COOPS_SUCCESS,
            payload: rows

        })


    } catch (error) {
 
        dispatch({
            type: GET_MY_COOPS_FAIL
        })
    }
}


//  #################### Coop Detail Action ###################333

export const coopDetailAction = (id) => async (dispatch) => {
    try {
   

        dispatch({ type: GET_COOP_DETAIL_REQUEST })

        // const { data } = await axios.get(`/api/products/${id}`)

        const filterData = await rows.filter(val => val.id == id)
        console.log("################## fiter data #### ",filterData)
        dispatch({
            type: GET_COOP_DETAIL_SUCCESS,
            payload: filterData[0]
        })


    } catch (error) {
        dispatch({
            type: GET_COOP_DETAIL_FAIL,
            payload : "something went wrong"
            // payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}


// ####################### COOP SEARCH ACTION ##########################

export const searchCoopAction = (value) => async (dispatch,getState) => {
    try {
        console.log("value ::  "  ,value)

        dispatch({ type: SEARCH_COOP_REQUEST })

        // From State Grab values
        const { getMyCoopReducer: { coops } } = getState()
        console.log("get state copp @@#@#@# ",coops)

        // const { data } = await axios.get(`/api/products/${id}`)
        // includes
        const filterData = await coops.filter(val => val.name.toLowerCase().includes(value.toLowerCase()))
        console.log("################## fiter data #### ",filterData)

        
        dispatch({
            type: SEARCH_COOP_SUCCESS,
            payload: filterData
        })

        if (filterData.length ==0 ){
            dispatch({
                type: SEARCH_COOP_FAIL,
                payload : "Coop Not Found"
                })
        }

    } catch (error) {
        dispatch({
            type: SEARCH_COOP_FAIL,
            payload : "Coop Not Found"
            // payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }

}
