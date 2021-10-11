import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


//  import reduer here
import { coopDetailReducers, getMyCoopReducer, searchCoopReducer } from './reducers/coopReducers';
import { getResultReducer } from './reducers/resultReducer';
import { userReducer } from './reducers/userReducer';

//  how to use useSelector
//  const productCategoryDetailsReducers = useSelector(state => state.productCategoryDetailsReducers)
//     const { loading, success, error, productCategory,parentProduct } = productCategoryDetailsReducers
 
//     const {success:successUpdate,product} = useSelector(state => state.updateProductReducer)

   

const reducer = combineReducers({

   
    getMyCoopReducer,
    coopDetailReducers,
    getResultReducer,
    searchCoopReducer,
    userReducer

})

// const cartItmesFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []



const initialState = {
    // cart: {
    //     cartItems: cartItmesFromStorage
    // },
    
  
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store