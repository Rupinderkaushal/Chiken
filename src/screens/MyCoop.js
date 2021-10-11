import React,{useEffect} from 'react'
import MyCoopComponent from '../Components/MyCoopComponent'
// import thumbnail from "../assests/images/chicken-thumbnail.png";
import "./MyCoop.css"
import { useDispatch, useSelector } from 'react-redux';
import { getMyCoopsAction } from './../redux/actions/CoopsActions';


function MyCoop() {

    const dispatch = useDispatch()

    const {loading,success,coops} = useSelector(state => state.getMyCoopReducer)
    console.log("MY COOP Reducer ... ",loading,coops)
    useEffect(() => {
      
        dispatch(getMyCoopsAction())
    }, [])
    return (
        <div className ="myCoop">

            <div className="myCoop__heading">
                <h3>    My Coop  </h3>
                <p>You have {coops ? coops?.length : "0"} chickens</p>
            </div>

            <div className="myCoop__component">
            {coops && coops.map((val) => (

                <MyCoopComponent key={val.id} id={val.id} img={val.img} name={val.name} dorking={val.dorking} talent={val.talent} spicy={val.spicy} />

            ))}
            </div>
        </div>
    )
}

export default MyCoop
