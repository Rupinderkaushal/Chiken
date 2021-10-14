import React, { useState } from 'react';
import '../Hero Section/Hero.css';
import { Button, Col,Modal,Row,Switch } from 'antd';
import NestedTable from '../tablecol/Tcollapse';
import { Tabs } from 'antd';
import SRace from '../SRaces/SRace';
import ResulT from '../Results/Results';
import PopUp from '../PopUp/PopUp';
const { TabPane } = Tabs;
const Hero = () => {
    const Cliker =()=>{
        return(
            console.log('im pressed')
        )
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (

        <div className='herodiv'>
            <Row>
                <Col style={{ width: "100%" }} >
                    <Tabs   >

                    <TabPane   tab='Enter Race' key="1">
                            <div id="root1">
                                <Button style={{ marginLeft: '20px',width:'104px', marginTop: '10px', marginBottom: '20px', borderRadius: "5px", height: '40px' }} type="primary">Open Race</Button>
                                <Button style={{ marginRight: '20px',width:'104px', marginTop: '10px', marginBottom: '20px', borderRadius: "5px", height: '40px', background: "#DD5859", color: 'white', border: 'none' }} onClick={showModal} ><span style={{ marginRight: '10px' }}><i class="fa fa-sliders" aria-hidden="true"></i></span>FIlters</Button>
                                <Modal style={{ borderRadius: '20px' }} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                                    <PopUp/>
                                   
                                   
                                </Modal>
                            </div>
                               <div >
                               <NestedTable />
                               </div>



                           
                        </TabPane>
                        
                        <TabPane tab='Scheduled Races' key='2'>
                        <Button style={{  float:'right', marginRight: '20px',width:'104px', marginTop: '10px', marginBottom: '20px', borderRadius: "5px", height: '40px', background: "#DD5859", color: 'white', border: 'none' }} onClick={showModal} ><span style={{ marginRight: '10px' }}><i class="fa fa-sliders" aria-hidden="true"></i></span>FIlters</Button>
                           
                                <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                                <PopUp/>
                                </Modal>
                            
                            <SRace />
                        </TabPane>
                        <TabPane tab='Results' key='3'>
                            <Row id="results-nav">
                              <div id="main-wrapper" className='d-flex justify-content-between align-items-center' style={{width:'100%',paddingTop:'20px',paddingBottom:'40px'}}>
                              <div>
                               <Col id='switch'  style={{textAlign:'center',marginLeft:'40px'}}>
                                <span><Switch size='small' onChange={Cliker} /> <label style={{marginLeft:'10px',fontWeight:'bold',fontSize:"15px"}}>My Chickens Only</label></span>
                                
                                </Col>
                               </div>
                              
                             <div id='btn-wrap' className='d-flex'>
                             <Col  >
                                <div id='span' style={{borderRadius:'5px',background:'#5B6FB6',padding:'10px 20px'}} className='d-flex '>
                                    <div >
                                        <label id="label" style={{color:'white', fontFamily: "Montserrat",fontStyle:"italic",fontSize:'15px',fontWeight:'bold',marginRight:"10px"}}><span style={{color:'#FFE500'}}>315516</span> RACES</label>
                                    </div>
                                    <div>
                                        <label style={{color:'white', fontFamily: "Montserrat",fontStyle:"italic",fontSize:'15px',fontWeight:'bold'}} ><span style={{color:"#89EC6F"}}>$24,154,45 USD</span> WON</label>
                                    </div>
                                </div>
                                </Col>
                                <Col id='btn-filter' >
                                <Button  style={{   width:'104px', borderRadius: "5px", height: '40px', background: "#DD5859", color: 'white', border: 'none',marginRight:' 30px',marginLeft:'10px' }} onClick={showModal} ><span style={{ marginRight: '10px' }}><i class="fa fa-sliders" aria-hidden="true"></i></span>FIlters</Button>
                                </Col>
                             </div>
                              
                              </div>
                            </Row>
                       

                                <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                                <PopUp/>
                                </Modal>
                            
                            <ResulT />
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>


            {/* <NestedTable/> */}
        </div>
    )
}

export default Hero;
