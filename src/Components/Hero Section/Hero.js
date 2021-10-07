import React ,{useState} from 'react';
import '../Hero Section/Hero.css';
import { Button, Col, Divider, Modal, Result, Row, Table } from 'antd';
import NestedTable from '../tablecol/Tcollapse';
import { Tabs } from 'antd';
import FilterBtn from '../FilterBtn/FilterBtn';
import SRace from '../SRaces/SRace';
import FilterBtn2 from '../FilterBtn/Fbtn2';
import ResulT from '../Results/Results';
import FilterBtn3 from '../FilterBtn/Racefilter';
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

        <div  className='herodiv'>
            <Row>
                    <Col style={{width:"100%"}} >
                <Tabs   >
                    
                    <TabPane   tab='Enter Race' key="1">
                      <div id="root1"></div>
                    <Divider orientation='right'><Button onClick={showModal} id="filter-btn"><i  class="fa fa-sliders" aria-hidden="true"></i>  Filters</Button>
                    <Modal style={{borderRadius:'20px'}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                        <FilterBtn/>
                    </Modal>
                    </Divider>
                        <NestedTable/>
                    </TabPane>
                    <TabPane  tab='Scheduled Races' key='2'>
                    <Divider orientation='right'><Button onClick={showModal} id="filter-btn"><i  class="fa fa-sliders" aria-hidden="true"></i>  Filters</Button>
                    <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                        <FilterBtn2/>
                    </Modal>
                    </Divider>
                        <SRace/>
                    </TabPane>
                    <TabPane  tab='Results' key='3'>
                    <Divider orientation='right'><Button onClick={showModal} id="filter-btn"><i  class="fa fa-sliders" aria-hidden="true"></i>  Filters</Button>
                    <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                        <FilterBtn3/>
                    </Modal>
                    </Divider>
                        <ResulT/>
                    </TabPane>
                </Tabs>
                </Col>
            </Row>
           

            {/* <NestedTable/> */}
        </div>
    )
}

export default Hero;
