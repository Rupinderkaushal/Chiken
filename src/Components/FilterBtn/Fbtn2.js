import { Form, Input, Button, Checkbox,Row,Col, Select, Divider } from 'antd';
const {Option} = Select;
const FilterBtn2 = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
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
    <Form style={{padding:'10px',fontFamily:"Montserrat"}}
      name="basic"
    
     layout="vertical"
      autoComplete="off"
    >
      <Row>
        <Col>
      <Divider><h3 style={{color:'#DD5859'}}>Filter</h3></Divider>
        </Col>
      </Row>
      <Row>
        <Col span={10} offset={1}  >
          <Form.Item 
          label={ 
            <p style={{fontSize:"15px",color:'#666666'}}>Packing Order</p>
            }
        // label="Packing Order"
        name="username"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
          <Select style={{borderRadius:'10px'}}>
              <Option style={{marginBottom:'10px'}}><Checkbox onChange={onChange}>A</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >B</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >C</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >Chicks</Checkbox></Option>
          </Select>
        {/* <Input style={{borderRadius:'10px'}} /> */}
      </Form.Item>
         
      
          </Col>
          <Col  span={10} offset={2}>
          <Form.Item
        label={
          <p  style={{fontSize:"15px",color:'#666666'}} >Distance</p>
        }
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
          <Select>
          <Option style={{marginBottom:'10px'}}><Checkbox onChange={onChange}>100m</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >120m</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >140m</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >160m</Checkbox></Option>
              <Option style={{marginBottom:'10px'}}><Checkbox onChange={onChange}>180m</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >200m</Checkbox></Option>
          </Select>
        {/* <Input.Password  style={{borderRadius:'10px'}} /> */}
      </Form.Item>
          </Col>
      </Row>
      <Row>
          <Col span={10} offset={1} >
          <Form.Item
          label={ <p  style={{fontSize:"15px",color:'#666666'}} >Prize Pool<span><small>(min)</small></span></p>}
  //  label="(min)"   
   rules ={{required : false, }}
   >
       <Input type='number' />

          </Form.Item>
          </Col>
          <Col span={10} offset={2} >
          <Form.Item
          label={ <p  style={{fontSize:"15px",color:'#666666'}} >Prize Pool<span><small>(max)</small></span></p>}
          
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
          rules={{required: false}}
          >
            <Select>
            <Option style={{marginBottom:'10px'}}><Checkbox onChange={onChange}>Dirt</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >Grass</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >Road</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >Rock</Checkbox></Option>
              <Option style={{marginBottom:'10px'}}><Checkbox onChange={onChange}>Sand</Checkbox></Option>
              <Option style={{marginBottom:'10px'}} ><Checkbox onChange={onChange} >Snow</Checkbox></Option>
            </Select>
          </Form.Item>
          </Col>
      </Row>
     <Row>
         <Col offset={1}>
         <Form.Item>
        <Button  style={btn} type='danger' ghost>
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

export default FilterBtn2;