import axios from "axios"
// import { handle_grams_kg_price } from "../../components/utils"
import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "../constant/cartConstants"


export const addToCart = ({ id, quantity, price, select_kg_or_grams, name, img }) => async (dispatch, getState) => {
    
    // dispatch(addToCart({
    //     id: product.id,
    //     name: product.name,
    //     quantity,
    //     price,
    //     select_kg_or_grams,
    //     img: product.image_link
    // }))
    // const { data } = await axios.get(`/api/products/${id}`)
    const { data } = await axios.get(`/api/productCategoryQuantity/${id}`)
// kg_or_grams,qty,sellingPrice
    const newPrice = handle_grams_kg_price(select_kg_or_grams, quantity, data.price)
    // 
    console.log("@@@@@@@!111!!!!!!",newPrice)
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: {
            id,
            quantity,
            price:newPrice,
            select_kg_or_grams,
            img,
            name,
            sellingPrice: Number(data.price),
            stock: data.currentStock,
            parentProduct : data.parentProduct
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

