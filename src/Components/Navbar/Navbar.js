import React, {useEffect} from 'react';
import "../Navbar/Navbar.css";
import {Row,Col,Divider} from 'antd';
import Logo from "../../Logo.png";
import vector from "../../b.png";
import vector1 from "../../a.png";
import 'antd/dist/antd.css';
import useWindowDimensions from './WindowDimen';
let open = false;
const Navbar  = () => {

const { height, width } = useWindowDimensions();

   
    
      const change = () => {
        const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("nav-col-two");
      if (!open) {
        
        hamburger.classList.add("open");
        menu.style.display='block';
      } else {
        hamburger.classList.remove("open");
        menu.style.display='none';
      }
      open = !open;
    };
   useEffect(() => {
    console.log(width);
    const menu = document.getElementById("nav-col-two");
    if(width < 850)
    {
        
        menu.style.display='none';
    }else 
        menu.style.display='block';  
   }, [width])
    const RowStyle = {background:"rgba(255,255,255,0.7)" ,padding:"10px 25px" };
    return (
        <div style={{width:'100%'}}>
        <Row id="main-row"  justify="space-between" align="middle" span={24}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={RowStyle}>
       <Col >
       <img id="main-logo" src={Logo}/>
       </Col>

        <Col>
        <div onClick={change} id='hamburger'>
            <div></div>
        </div>
        </Col>
       <Col   id='nav-col-two'  >
           
           <Row    >
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
