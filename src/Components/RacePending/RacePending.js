import React from 'react'
import CardChicken from '../Card/Card'
import "../RacePending/RacePending.css"
const RacePending = () => {
    return (
        <div id="pendingrace" >
            <div style={{fontFamily: "Montserrat"}} className='race-pending-hddr d-flex align-items-center justify-content-between'>
                <div style={{paddingTop:'50px'}} className='enterrace'>
                    <p style={{fontWeight:'bold',fontSize:'20px',fontFamily: "Montserrat",color:'white'}}>Juvinile Jublie</p>
                    <button style={{paddingRight:"25px",paddingLeft:"25px"}} className='btn btn-primary'>Enter Race</button>
                </div>
                <div className='prizepool'>
                    <button style={{marginBottom:'20px',padding:'0px 5px',background:'#8860B9',border:'none'}} className='btn btn-primary'><span style={{fontWeight:'bolder'}}>Prizepool <label style={{marginLeft:'10px',fontStyle:"italic",fontSize:'18px'}}>$24.63 USD</label></span> </button><br/>
                    <button style={{padding:'0px 5px',background:'#8860B9',border:'none'}} className='btn btn-primary'><span style={{marginLeft:'65px',fontWeight:'bolder'}}>Registerd <label style={{marginLeft:'10px',fontStyle:"italic",fontSize:'18px'}} >9/12</label></span></button>
                </div>
            </div>
            <div style={{padding:'20px 0px',borderBottom:'2px solid white'}} className='navbar-race-pending d-flex justify-content-left' >
                <span id="navbar-span" style={{fontWeight:'bolder',color:'#FFE600',marginRight:'100px',fontSize:'14px'}}>Packing Order: <label style={{background:'black',color:'white',padding:'2px 15px',borderRadius:"5px"}} >A</label></span>
                <span id="navbar-span" style={{fontWeight:'bolder',color:'#FFE600',marginRight:'100px',fontSize:'14px'}}>Distance: <label style={{color:'white'}}>1000m</label></span>
                <span id="navbar-span" style={{fontWeight:'bolder',color:'#FFE600',marginRight:'100px',fontSize:'14px'}}>Starts At:</span>
                <span id="navbar-span" style={{fontWeight:'bolder',color:'#FFE600',marginRight:'100px',fontSize:'14px'}}>Terrain: </span>

            </div>
            <div style={{padding:"30px 0px"}}>
                <div id='card-container' style={{margin:'23px 0px '}} className='d-flex justify-content-between'>
                    <CardChicken
                    GateNo = "Gate 1"
                    />
                     <CardChicken
                    GateNo = "Gate 2"
                    />
                     <CardChicken
                    GateNo = "Gate 3"
                    />
                    
                </div>
                <div id='card-container' style={{margin:'23px 0px '}} className='d-flex justify-content-between'>
                    <CardChicken
                    GateNo = "Gate 4"
                    />
                     <CardChicken
                    GateNo = "Gate 5"
                    />
                     <CardChicken
                    GateNo = "Gate 6"
                    />
                    
                </div>
                 <div id='card-container' style={{margin:'23px 0px '}} className='d-flex justify-content-between'>
                    <CardChicken
                    GateNo = "Gate 7"
                    />
                     <CardChicken
                    GateNo = "Gate 8"
                    />
                     <CardChicken
                    GateNo = "Gate 9"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default RacePending
