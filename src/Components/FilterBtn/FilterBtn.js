import { Form, Input, Button, Checkbox,Row,Col, Select, Divider } from 'antd';
import "./filterbtn2.css"
const {Option} = Select;
const FilterBtn = () => {
  const textshow = ()=>{
    const hddr = document.getElementById('root1');
    return(
     hddr.innerHTML="IM Pressed !"
      
    )
  }
  const Label = {
    fontSize:'14px',

  }
const btn =
{
   width:'164px',
   height:'40px',
    marginRight : '70px',
    borderRadius:'10px',
}

  return (
    <Form style={{fontFamily:"Montserrat"}}
      name="basic"
    
     layout="vertical"
      autoComplete="on"
    >
      <Row>
        <Col>
      <Divider><h3 style={{color:'#DD5859'}}>Filter</h3></Divider>
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={1}  >
          <Form.Item id='form-item'
          label={ 
            <p style={{fontSize:"15px",color:'#666666'}}>Packing Order</p>
            }
        // label="Packing Order"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
          <Select style={{borderRadius:'10px'}}>
              <Option value="A" style={{marginBottom:'10px'}}><Checkbox>A</Checkbox></Option>
              <Option value="B" style={{marginBottom:'10px'}} ><Checkbox  >B</Checkbox></Option>
              <Option value="C" style={{marginBottom:'10px'}} ><Checkbox >C</Checkbox></Option>
              <Option value="Chicks" style={{marginBottom:'10px'}} ><Checkbox  >Chicks</Checkbox></Option>
          </Select>
        {/* <Input style={{borderRadius:'10px'}} /> */}
      </Form.Item>
         
      
          </Col>
          <Col  span={10} offset={2}>
          <Form.Item
        label={
          <p id='pass' style={{fontSize:"15px",color:'#666666'}} >Distance</p>
        }
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
          <Select >
          <Option value="100m" style={{marginBottom:'10px'}}><Checkbox>100m</Checkbox></Option>
              <Option value="120m" style={{marginBottom:'10px'}} ><Checkbox >120m</Checkbox></Option>
              <Option value="140m" style={{marginBottom:'10px'}} ><Checkbox  >140m</Checkbox></Option>
              <Option value="160m" style={{marginBottom:'10px'}} ><Checkbox  >160m</Checkbox></Option>
              <Option value="180m" style={{marginBottom:'10px'}}><Checkbox>180m</Checkbox></Option>
              <Option value="200m" style={{marginBottom:'10px'}} ><Checkbox >200m</Checkbox></Option>
          </Select>
        {/* <Input.Password  style={{borderRadius:'10px'}} /> */}
      </Form.Item>
          </Col>
      </Row>
      <Row>
          <Col span={10} offset={1} >
          <Form.Item
          label={ <p  style={{fontSize:"15px",color:'#666666'}} >Entry Fee<span><small>(min)</small></span></p>}
  //  label="(min)"   
   rules ={{required : false, }}
   >
       <Input type='number' />

          </Form.Item>
          </Col>
          <Col span={10} offset={2} >
          <Form.Item
          label={ <p  style={{fontSize:"15px",color:'#666666'}} >Entry Fee<span><small>(max)</small></span></p>}
          
          // label="Entry Fee(max)"   
          rules ={{required : false }}
          >
              <Input type='number'/>
       
                 </Form.Item>
          </Col>
      </Row>

      <Row>
          <Col offset={1} span={22}>
          <Form.Item
          label={
            <p  style={{fontSize:"15px",color:'#666666'}} >Terrain Type</p>
          }
          // label="Terrain Type"
          rules={{required: false,
          
          
          }}
          >
            <Select >
            <Option   value="Dirt" style={{marginBottom:'10px'}}><Checkbox>Dirt</Checkbox></Option>
              <Option value="Grass" style={{marginBottom:'10px'}} ><Checkbox >Grass</Checkbox></Option>
              <Option value="Road" style={{marginBottom:'10px'}} ><Checkbox >Road</Checkbox></Option>
              <Option value="Rock" style={{marginBottom:'10px'}} ><Checkbox >Rock</Checkbox></Option>
              <Option value="Sand" style={{marginBottom:'10px'}}><Checkbox>Sand</Checkbox></Option>
              <Option value="Snow" style={{marginBottom:'10px'}} ><Checkbox >Snow</Checkbox></Option>
            </Select>
          </Form.Item>
          </Col>
      </Row>
     <Row>
         <Col offset={1}>
         <Form.Item>
        <Button style={btn} type='danger' ghost>
        <label style={{fontSize:'15px',fontFamily:'Montserrat'}}>Reset</label>
        </Button>
      </Form.Item>
         </Col>
         <Col>
         <Form.Item>
             <Button onClick={textshow} style={{ width:'164px',borderRadius:'10px',
   height:'40px',}}  type="danger">
                 <label style={{fontFamily:'Montserrat',fontSize:'15px'}}>Filter</label>
             </Button>
         </Form.Item>
         </Col>
     </Row>
    </Form>
  );
};

export default FilterBtn;