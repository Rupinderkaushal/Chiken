import {Button, Modal, Table,Row,Col,Form, Checkbox,Select} from 'antd'

import FormItem from 'antd/lib/form/FormItem';

import React, { useState } from 'react';
const {Option} = Select;
const Afilter = () => {
    const age = [85, 75, 50, 45, 30, 25, 15, 1]
    const filterData = () => {
        const filterAge = document.getElementById('a');
        const datafilter = age.filter((value) => value > 50)
        filterAge.innerHTML = datafilter
    }
///////////////////////////////////////////////////////////////////////////
const data =[
    {
        srno:"1",
        name:'Rupinder',
        city:'Sangrur',
        country:'India',
        mob:'7897979',
        key:"1"
    },
    {
        srno:"2",
        name:'Upinder',
        city:'Delhi',
        country:'India',
        mob:'7822229',
        key:"2"
    },
    {
        srno:"3",
        name:'Inder',
        city:'Mohali',
        country:'India',
        mob:'112127979',
        key:"3"
    },
    {
        srno:"4",
        name:'Rupinder',
        city:'Dhuri',
        country:'Australia',
        mob:'7897979',
        key:"4"
    },
    {
        srno:"5",
        name:'Rupinder',
        city:'Sangrur',
        country:'India',
        mob:'7897979',
        key:"5"
    },
]
const columns = [
    {
        title:'Sr No',
        dataIndex:'srno',
        key:'srno'
    },
    {
        title:'Name',
        dataIndex:'name',
        key:'name'
    },
    {
        title:'City',
        dataIndex:'city',
        key:'city'
    },
    {
        title:'Country',
        dataIndex:'country',
        key:'country'
    },
    {
        title:'Contact',
        dataIndex:'mob',
        key:'mob'
    },
]
const [mvisi,setMvisi] = useState(false);
const showModal =()=>{
    setMvisi(true)
}
const okhandler =()=>{
    setMvisi(false)
}
const cancelhandler =()=>{
    setMvisi(false)
}
const [nameFilter,setNameFilter] =useState('name');
const help = document.getElementById('z')
help.innerHTML= nameFilter;

function onClick (){
    setNameFilter= nameFilter +1
}

    return (
        <div>
            <h1>Array Filter</h1>
            <>
                <h3>First example</h3>
                <p>Given values : 85,75,50,45,30,25,15,1</p>
                <p id="a" >

                    {/* {data && data.map(val => val)} */}
                </p>
                <p>We have to get greater than 50 <button onClick={filterData} >CLick Here</button></p>


            </>
            <Button onClick={showModal}>Filter</Button>
                 <Modal   visible={mvisi} onOk={okhandler} onCancel={cancelhandler}>
                   
                  <Form
                  layout="vertical"
                  >
                    <Row>
                        <Col span={8} >
                        <FormItem
                      label='Name'
                      name="usename1"
                      >
                          <Select  >
                             <Option value="Rupinder"><Checkbox>Rupinder</Checkbox></Option>
                             <Option value="Upinder"><Checkbox>Upinder</Checkbox></Option>
                             <Option value="Inder" ><Checkbox>Inder</Checkbox></Option>
                          </Select>
                      </FormItem>
                        </Col>
                        <Col offset={4} span={8}>
                        <FormItem
                      label='city'
                      name="usename"
                      >
                          <Select >
                             <Option value="Sangrur"><Checkbox>Sangrur</Checkbox></Option>
                             <Option value="Delhi" ><Checkbox>Delhi</Checkbox></Option>
                             <Option value='Mohali'><Checkbox>Mohali</Checkbox></Option>
                          </Select>
                      </FormItem>
                        </Col>
                    </Row>
                    
                    <Button onClick={onClick}  type="primary">Filter</Button>
                  </Form>

                 </Modal>
                 <p id="z"></p>
<Table
   dataSource={data}
   columns={columns}
/>
        </div>
    )
}

export default Afilter;
