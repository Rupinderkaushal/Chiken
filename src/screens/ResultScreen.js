import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import thumbnail from "../assests/images/chicken-thumbnail.png";

import "./ResultScreen.css"
import ResultComponent from '../Components/ResultComponent';
import { getResultAction } from '../redux/actions/resultAction';

function createData(name, value) {
    return { name, value };
  }
  
  const rows = [
    createData("Heritage", "Dorking"),
    createData("Perfection", "96%"),
    createData("Stock", "Stock"),
    createData("Talent", "Talent"),
    createData("Races", 12),
    createData("Beak", "Orange"),
 
  
  
  ];
  

function ResultScreen() {


    const dispatch = useDispatch()

    const {loading,success,results} = useSelector(state => state.getResultReducer)
    useEffect(() => {
        
        dispatch(getResultAction(rows))
    }, [])
    return (
        <div className="resultScreen">
           
            {/* ################# top ############## */}
            <div className="resultScreen__top">

                <div className="resultScreen__top__left">
                    <h3>Juvinile Jublie</h3>

                    <button className="resultScreen__watchReplay__btn">Watch Replay</button>
                </div>


                <div className="resultScreen__top__right">
                    <p className="resultScreen__prizePool">
                        <span >Prizepool</span>
                        <span className="resultScreen__prizePool__amount">$24.63 USD</span>
                    </p>

                    <p className="resultScreen__racefinished">Race Finished</p>
                </div>
            </div>


            {/* #################### middle #################*/}

            <div className="resultScreen__middle">

                <p> 
                    <span className="resultScreen__middle__heading"> Pecking Order : </span> 
                    <span className="resultScreen__middle__peckingValue"> A </span>
                </p>

                <p> 
                    <span className="resultScreen__middle__heading">Distance : </span> 
                    <span className="resultScreen__middle__value"> 1000 m </span>
                </p>

                <p> 
                    <span className="resultScreen__middle__heading">Status : </span> 
                    <span className="resultScreen__middle__value"> Finished</span>
                </p>

                <p> 
                    <span className="resultScreen__middle__heading">Ran At : </span> 
                    <span className="resultScreen__middle__value"> 10 Sep 2021, 12:36 </span>
                </p>

                <p> 
                    <span className="resultScreen__middle__heading">Terrian : </span> 
                    <span className="resultScreen__middle__value"> jubile </span>
                </p>
                
            </div>


            {/* ########################### Result Component #################### */}
            {/* function ResultComponent({position,timetaken,coopname,prize_amount,attributes,img})  */}

            <div className="resultScreen__bottom">

                {results && results?.map((val) =>(
                        <ResultComponent position={val.position} timetaken={val.timetaken} coopname={val.coopname} prize_amount={val.prize_amount} attributes={val.attributes} img={val.img}/>
                

                ))}      
            </div>
            </div>
    )
}

export default ResultScreen
