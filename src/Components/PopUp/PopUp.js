import React from 'react';
import '../PopUp/PopUp.css';
import { Form, Input, Button, Checkbox,Row,Col, Select, Divider } from 'antd';
const {Option} = Select;
const PopUp = () => {
    return (
        <div style={{padding:'20px 10px'}}>
           <Form style={{width:'400px'}} layout="vertical">
           <label style={{color:'#DD5859',fontSize:'24px',marginLeft:'8px',marginBottom:'20px',fontFamily:"Montserrat"}}>Filter</label>
                   <Form.Item style={{paddingLeft:'0px 8px'}} >
                  <div className="d-flex justify-content-between">
                  <div>
                   <label style={{color:'grey',fontSize:'15px',marginLeft:'10px'}}>Packing Order</label><br/>
                      <Select placeholder='Select Order' style={{color:'grey',fontSize:'15px', width:'180px',height:'35px',borderRadius:'5px',padding:'5px 10px'}} >
                          
                      <Option value="A" style={{marginBottom:'10px'}}><Checkbox>A</Checkbox></Option>
              <Option value="B" style={{marginBottom:'10px'}} ><Checkbox  >B</Checkbox></Option>
              <Option value="C" style={{marginBottom:'10px'}} ><Checkbox >C</Checkbox></Option>
              <Option value="Chicks" style={{marginBottom:'10px'}} ><Checkbox  >Chicks</Checkbox></Option>
                      </Select>
                   </div>
                   <div>
                   <label style={{color:'grey',fontSize:'15px',marginLeft:'8px'}}>Distance</label><br/>
                      <Select placeholder='Select Distance' style={{color:'grey',fontSize:'15px', width:'180px',height:'35px',borderRadius:'5px',padding:'5px'}} >
                          
                      <Option value="100m" style={{marginBottom:'10px'}}><Checkbox>100m</Checkbox></Option>
              <Option value="120m" style={{marginBottom:'10px'}} ><Checkbox >120m</Checkbox></Option>
              <Option value="140m" style={{marginBottom:'10px'}} ><Checkbox  >140m</Checkbox></Option>
              <Option value="160m" style={{marginBottom:'10px'}} ><Checkbox  >160m</Checkbox></Option>
              <Option value="180m" style={{marginBottom:'10px'}}><Checkbox>180m</Checkbox></Option>
              <Option value="200m" style={{marginBottom:'10px'}} ><Checkbox >200m</Checkbox></Option>
                      </Select>
                   </div>
                  </div>
                   </Form.Item>
                   <Form.Item style={{padding:'0px 8px'}} >
                  <div className="d-flex ">
                  <div>
                   <label style={{color:'grey',fontSize:'15px'}}>Entry Fee (min)</label><br/>
                     <Input style={{borderRadius:'5px',width:'170px',height:'35px'}}></Input>
                   </div>
                   <div style={{marginLeft:'40px'}}>
                   <label style={{color:'grey',fontSize:'15px'}}>Entry Fee (max)</label><br/>
                     <Input  style={{borderRadius:'5px',width:'170px',height:'35px'}} ></Input>
                   </div>
                  </div>
                   </Form.Item>
                   <Form.Item style={{padding:"0px 8px"}}  >
                       <label style={{color:'grey',fontSize:'15px',marginLeft:'3px'}} >Terrain</label><br/>
                   <Select placeholder="Select Terrain Type" style={{width:"380px"}}>
                   <Option   value="Dirt" style={{marginBottom:'10px'}}><Checkbox>Dirt</Checkbox></Option>
              <Option value="Grass" style={{marginBottom:'10px'}} ><Checkbox >Grass</Checkbox></Option>
              <Option value="Road" style={{marginBottom:'10px'}} ><Checkbox >Road</Checkbox></Option>
              <Option value="Rock" style={{marginBottom:'10px'}} ><Checkbox >Rock</Checkbox></Option>
              <Option value="Sand" style={{marginBottom:'10px'}}><Checkbox>Sand</Checkbox></Option>
              <Option value="Snow" style={{marginBottom:'10px'}} ><Checkbox >Snow</Checkbox></Option>
                   </Select>
                   </Form.Item>
                   <Form.Item>
                      <div style={{padding:'0px 8px'}} className='d-flex justify-content-between'>
                      <Button style={{ width:'164px',borderRadius:'10px', height:'40px',}}  type='danger' ghost>
        <label style={{fontSize:'15px',fontFamily:'Montserrat'}}>Reset</label>
        </Button>
                      <Button  style={{ width:'164px',borderRadius:'10px', height:'40px',}}  type="danger">
                 <label style={{fontFamily:'Montserrat',fontSize:'15px'}}>Filter</label>
             </Button>
                      </div>
                                          </Form.Item>
           </Form>
        </div>
    )
}

export default PopUp;
