import React from 'react'
import "./MyCoopComponent.css"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


{/* <MyCoopComponent id={1} img={thumbnail} name="Flight" dorking="Dorking" talent="Talent" spicy="Spicy" /> */}

function MyCoopComponent({img,name,dorking,talent,id,spicy}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const clickHandler = (id) => {

        history.push(`/chicken-detail/${id}`)
    }
    return (
        <div className="myCoopComponent">
            
            <img src={img} alt="no Image"  className="myCoopComponent__img"/>
            <h3 className="myCoopComponent__name">{name}</h3>

            <div className="myCoopComponent__attributes">
               {dorking && <span>{dorking} </span>} 
              
              {talent && <span>{talent} </span>}  
             {spicy &&   <span>{spicy} </span>} 
              
              {dorking &&  <span>{dorking} </span>}

            </div>

            <button className="myCoopComponent__btn" onClick={()=> clickHandler(id)}> Show Details</button>
        </div>
    )
}

export default MyCoopComponent
