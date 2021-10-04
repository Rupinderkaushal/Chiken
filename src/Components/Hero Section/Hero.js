import React from 'react';
import '../Hero Section/Hero.css';
import { Button, Col, Divider, Row, Table } from 'antd';
import NestedTable from '../tablecol/Tcollapse';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const Hero = () => {
    return (

        <div  className='herodiv'>
            <Row>
                    <Col style={{width:"100%"}} >
                <Tabs   >
                    
                    <TabPane   tab='Enter Race' key="1">
                    <Divider orientation='right'><Button id="filter-btn"><i  class="fa fa-sliders" aria-hidden="true"></i>  Filters</Button></Divider>
                        <NestedTable/>
                    </TabPane>
                    <TabPane  tab='Scheduled Races' key='2'></TabPane>
                    <TabPane  tab='Results' key='3'></TabPane>
                </Tabs>
                </Col>
            </Row>
           

            {/* <NestedTable/> */}
        </div>
    )
}

export default Hero;
