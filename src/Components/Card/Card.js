import React from 'react'
import "../Card/Card.css"
import Pic from '../../assests/images/chicken-sm.png';
const CardChicken = ({GateNo}) => {
    
    return (
        <div style={{fontFamily: "Montserrat"}} className='chicken-card d-flex justify-content-between'>
            <div id='crd-width' style={{textAlign:'left',width:'300px',marginRight:'10px'}}>
            <button style={{marginBottom:'20px',fontWeight:'bold',fontStyle:'italic',fontSize:'20px',background:'#FFE600'}} className='btn btn-warning'>{GateNo}</button>
            <div style={{marginBottom:'20px',color:'white'}} className='d-flex justify-content-between'>
                <label style={{fontWeight:'bold'}}>Wilber</label>
                <label style={{fontSize:'13px'}} >Talent</label>
            </div>
            <div style={{color:'white'}} className='d-flex justify-content-around' >
                <label style={{marginLeft:'-20px',fontSize:'13px'}}>Dorking</label>
                <label style={{fontSize:'13px'}}>96%</label>
                <label style={{fontSize:'13px'}}>Stock</label>
            </div>
            </div>
            <div>
                <a href="#"><img src={Pic}/></a>
            </div>
            
        </div>
        
    )
}

export default CardChicken
