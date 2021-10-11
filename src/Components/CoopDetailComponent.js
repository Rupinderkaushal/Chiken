import React from 'react'
import "./CoopDetailComponent.css"

function CoopDetailComponent({coop,thumbnail,ownerName,chickenName,attributes}) {

    console.log("Coop :",coop)
    // const {name} = coop
    // console.log(" cop name ",coop[0])
    return (
        <div className="coopDetailComponent">
        <img src={thumbnail} alt="no  image" />
  
        <div className="coopDetailComponent__owner__detail">
          <p className="coopDetailComponent__owner__p">
            {" "}
            <span>Owner</span> <span>{ownerName}</span>{" "}
          </p>
  
          <p className="coopDetailComponent__owner__p">
            {" "}
            <span>Name</span> <span>{coop?.name}</span>
          </p>
        </div>
  
  
        <div className="table_with_flex">
  
        {attributes.map((row,index) => ( 
                  <div key={index} className="table_data">
  
                      <p className="table_heading">{row.name}</p>
                      <p className="table_value">{row.value}</p>
                  </div>
          ) ) }
        </div>
    
  
      </div>
    )
}

export default CoopDetailComponent
