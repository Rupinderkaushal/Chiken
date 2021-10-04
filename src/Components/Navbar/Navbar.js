import React from 'react';
import "../Navbar/Navbar.css";
import {Row,Col,Divider} from 'antd';
import Logo from "../../Logo.png";
import vector from "../../b.png";
import vector1 from "../../a.png";
import 'antd/dist/antd.css';
const Navbar  = () => {
    const RowStyle = {background:"rgba(255,255,255,0.7)",width:"100%" ,padding:"10px", height:"102px" };
    return (
        <div>
        <Row className='d-flex justify-content-between' style={RowStyle}>
       <Col id='nav-col' span={3}>
       <img id="main-logo" src={Logo}/>
       </Col>
       <Col  id='nav-col-two' span={12} >
           
           <Row>
               <Col>
               <div className="d-flex col-a">
                   <a href="#">Race <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                   <a href="#"> Chickens <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                   <a href="#">Tutorial</a>
                    
            </div>
               </Col>
               <Col id="nav-col-row"  >
               <Row >
                   <Col  id='eth' >ETH BALANCE</Col>
                   <Col id="usd1" >$0.00 USD</Col>
                   
                  
               </Row>
               <Row >
              
              
               <Col id="weth">WETH BALANCE</Col>
                   <Col id="usd">$148.99 USD</Col>
                  
               </Row>
               <Col>
               <div id='col-img'>
               <img src={vector}/>
                <img id='vector' src={vector1}/>
               </div>
               </Col>
               </Col>
              
           </Row>
           
       </Col>
        </Row>
      
        </div>
    )
}

export default Navbar ;
