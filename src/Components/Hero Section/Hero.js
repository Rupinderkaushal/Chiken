import React, { useState } from 'react';
import '../Hero Section/Hero.css';
import { Button, Col, Divider, Modal, Result, Row, Table } from 'antd';
import NestedTable from '../tablecol/Tcollapse';
import { Tabs } from 'antd';
import SRace from '../SRaces/SRace';
import ResulT from '../Results/Results';
import PopUp from '../PopUp/PopUp';
const { TabPane } = Tabs;
const Hero = () => {
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
                        <Button style={{  float:'right', marginRight: '20px',width:'104px', marginTop: '10px', marginBottom: '20px', borderRadius: "5px", height: '40px', background: "#DD5859", color: 'white', border: 'none' }} onClick={showModal} ><span style={{ marginRight: '10px' }}><i class="fa fa-sliders" aria-hidden="true"></i></span>FIlters</Button>

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
