import React from 'react'
import "./ResultComponent.css"

function ResultComponent({position,timetaken,coopname,prize_amount,attributes,img}) {

    console.log("attribute s::: ",attributes)

    return (
        <div className="resultComponent">
            
            <div className="resultComponent__left">
                
                <div className="resultComponent__position__timeTaken">

                    <h4 className="resultComponent__position">{position}</h4>
                    <p className="resultComponent__timeTaken">{timetaken}s</p>
                </div>


                <div className="resultComponent__coopname__prize">
                    <h3 className="resultComponent__coopname">{coopname}</h3>
                    <p className="resultComponent__prize"> <span>Prize </span> {''} ${prize_amount}</p>
                </div>


                <div className="resultComponent__coop__attribute">

                        {attributes && attributes.map((val,index) =>{
                           return <span key={index}>{val.value}</span>
                        })}
                </div>
            </div>

            <div className="resultComponent__right">
                <img src={img} alt="no Image" className="resultComponent__img"/>

            </div>

        </div>
    )
}

export default ResultComponent
