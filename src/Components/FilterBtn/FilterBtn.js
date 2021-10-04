import { Form, Input, Button, Checkbox,Row,Col, Select } from 'antd';
const {Option} = Select;
const FilterBtn = () => {
  
const btn =
{
    padding :'15px 25px',
    marginRight : '70px'
}
const btn1 ={
    padding :'15px 25px'
}
  return (
      
    <Form style={{width:"30%",margin:'50px auto',border:'solid',padding:'10px'}}
      name="basic"
    
     layout="vertical"
      autoComplete="off"
    >
      <Row>
          <Col span={10} offset={1} >
          <Form.Item 
        label="Packing Order"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
          <Select>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
          </Select>
        {/* <Input style={{borderRadius:'10px'}} /> */}
      </Form.Item>
         
      
          </Col>
          <Col span={10} offset={2}>
          <Form.Item
        label="Distance"
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
          <Select>
              <Option>2555</Option>
              <Option>2556</Option>
              <Option>2557</Option>
          </Select>
        {/* <Input.Password  style={{borderRadius:'10px'}} /> */}
      </Form.Item>
          </Col>
      </Row>
      <Row>
          <Col span={10} offset={1} >
          <Form.Item
          
   label="Entry Fee"   
   rules ={{required : false, }}
   >
       <Input/>

          </Form.Item>
          </Col>
          <Col span={10} offset={2} >
          <Form.Item
          
          label="Entry Fee"   
          rules ={{required : false }}
          >
              <Input/>
       
                 </Form.Item>
          </Col>
      </Row>

      <Row>
          <Col offset={1} span={22}>
          <Form.Item
          label="Terrain Type"
          rules={{required: false}}
          >
            <Select>
                <Option>1</Option>
            </Select>
          </Form.Item>
          </Col>
      </Row>
     <Row>
         <Col offset={1}>
         <Form.Item>
        <Button style={btn} type='danger' ghost>
        <label style={{fontSize:'16px'}}>Reset</label>
        </Button>
      </Form.Item>
         </Col>
         <Col>
         <Form.Item>
             <Button style={btn1} type="danger">
                 Filter
             </Button>
         </Form.Item>
         </Col>
     </Row>
    </Form>
  );
};

export default FilterBtn;