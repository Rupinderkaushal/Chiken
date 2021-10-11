// import { ADD_ITEM_TO_CART, CLEAR_CART, REMOVE_ITEM_FROM_CART } from "../constant/cartConstants"

const initialState = {
    cartItems : []
}

function cartReducer(state=initialState,action) {
   
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            
            console.log("#### ADD Item to Cart ####", action)
            console.log("#### ADD Item to cart state  ####", state.cartItems)
            console.log("#### ssssssssssssssssss ####",state)


            const item = action.payload
            const existItem = state.cartItems.find(x => x.id === item.id)
            
            if (existItem) {
                // add the updated item in the state
                console.log("#### ITEM Already Exists #####",existItem)
                return {
                    ...state,
                    cartItems : state.cartItems.map(x => x.id === existItem.id ? item :x)
                }
                
            }
            else {
                console.log("#### New Item #####",state.cartItems)

                return {
                    ...state,
                    cartItems : [...state.cartItems, action.payload]
                }
            }

            
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( item => item.id !== action.payload) 
            }
            
        case CLEAR_CART:

            return {
                ...state,
                cartItems: []
            }

    
        default:
            return state
    }
}

export default cartReducer
