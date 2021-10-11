import { GET_RESULT_REQUEST, GET_RESULT_SUCCESS,GET_RESULT_FAIL } from "../constants/myCoopConstants"
import thumbnail from "./../../assests/images/chicken-thumbnail.png";

function createObjectData(position,timetaken,coopname,prize_amount,attributes,img) {
    return {position, timetaken, coopname, prize_amount,attributes,img };   // create object
  }
 


{/* <ResultComponent position={val} timetaken={55} coopname="Wilber" prize_amount="5.99" attributes={rows} img={thumbnail}/> */}
                
export const getResultAction = (data) => async (dispatch, getState) => {

    try {

        dispatch({
            type: GET_RESULT_REQUEST
        })

  

        const rows = await [
            createObjectData("1st",55,"Wilber",5.99,data,thumbnail),
            createObjectData("2nd",58,"Thomas",5.99,data,thumbnail),
        
            createObjectData("3rd",58.5,"Roman",5.99,data,thumbnail),
            createObjectData("4th",58.9,"Micky",5.99,data,thumbnail),
            createObjectData("5th",59,"John",5.99,data,thumbnail),
            createObjectData("6th",59.4,"kiti",5.99,data,thumbnail),
            createObjectData("7th",59.5,"Ali",5.99,data,thumbnail),
          ];  
        

        // const { cart: { cartItems } } = getState()

        // const { data } = await axios.post(`/api/add-order/`,cartItems)
        // console.log("#### cartItems in AddOrder Actoin ###", cartItems)
        // const { data } = await axios.post("api/orders/addorderItem", order, config)


        dispatch({
            type: GET_RESULT_SUCCESS,
            payload: rows

        })


    } catch (error) {
        console.log("#### add order error ###", error)
        dispatch({
            type: GET_RESULT_FAIL
        })
    }
}