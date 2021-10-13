import { Table,Row,Col,Button,Modal } from 'antd';
import Chik  from "../../chik.png";
import React from 'react';
import Box from "../../box.png";
import "../tablecol/tb.css";
import {useEffect,useState} from "react"
import { fontWeight } from '@mui/system';

function NestedTable() {
    const [visible,setVisible]= useState(false);
        const DisplayModal =()=>{
            setVisible(true);
        };
        const ok =()=>{
            setVisible(false);
        };
        const cancel =()=>{
            setVisible(false);
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
  const expandedRowRender = () => {
      
    const styLE ={
 
      border:"solid",borderRadius: '25px',width:"119px",height:"47px", border:"1px solid  #1083FF", textAlign:"center",margin:'0px 3px'
  }
  const Lable ={
      borderBottom:" 2px solid  #1083FF",fontSize:"24px",fontStyle:"italic",marginTop:"-8px"
  }
  const ROW = {
      padding:"10px"
  }
   const LanE ={
      fontSize:"24px",fontWeight:"600"
  }
  const textAliGn ={
      textAlign:"center"
  }
//   const isWebDevice = useMediaQuery('(max-width:849px)');
    const columns =[
      {
          title:"Image",key:'image',
          render:()=>{
              return(
                  <div style={textAliGn}>
                  <img src={Chik}/>
              </div>
              )
          }
     
      },
      {
          title:"Lane",key:'lane',
          render:(text,record)=>{
              return(
                  <div style={textAliGn} >
                      {record.lane}
                  </div>
              )
          }
      },
      {
          title:"Name",key:'name',
          render:()=>{
              return(
                  <div style={textAliGn} >
                      <label>Willber</label>
                  </div>
              )
          }
      },
      {
          title:"Heritage",
          render:()=>{
              return(
                  <div style={textAliGn} >
                      <label>Dorking</label>
                  </div>
              )
          }
      },
      {
          title:"Perfection",
          render:()=>{
              return(
                  <div style={textAliGn}  >
                      <label>96%</label>
                  </div>
              )
          }
      },
      {
          title:"Owner",
          render:()=>{
              return(
                  <div  style={textAliGn} >
                      <label>Liam</label>
                  </div>
              )
          }
      },
      {
          title:"Hisory",
          render:()=>{
              return(
                  <div style={textAliGn} >
                      <label>2/0/4</label>
                  </div>
              )
          }
      },
      {
          title:"Races",
          render:(text,hello)=>{
              return(
                  <div  style={textAliGn} >
                      {hello.races}
                  </div>
              )
          }
      },
      {
          title:'',
          render :()=>{
             return(
                <div>
                <button onClick={DisplayModal}  style={{fontSize:'13px'}} className='btn btn-primary'>Enter</button>
                <Modal visible={visible} onOk={ok} onCancel={cancel} >
      <div style={{width:'400px',padding:'20px 10px'}}  >
          <h5 style={{textAlign:'center'}}>Transaction confirmation</h5>
          <p><span style={{fontWeight:'bold'}}>Current Price </span><br/>
          0.5$
          </p>
          <p><span style={{fontWeight:'bold'}}>ESTIMATED TX FEE </span> <br/>
          $0.00 USD
          </p>
          <p> <span style={{fontWeight:'bold'}}>ESTIMATED TOTAL </span> <br/>
          $0.00 USD
          </p>
         <div className='d-flex justify-content-around'>
         <button style={{background:'white',color:"blue",width:'100px',height:'30px',borderRadius:'5px',border:'1px solid blue'}}>Btn 1</button>
         <button style={{background:'blue',color:"white",width:'100px',height:'30px',borderRadius:'5px',border:'none'}} >Btn 2</button>
         </div>
      </div>
                </Modal>
            </div>
             )
          }
      }
  ]
  const data= [
      {
          name:'',
          lane:'3',
          races:'12',
          key:'1'
      },
      {
  name:"",
  lane:"5",
  races:'7',
  key:'2'
      },
      {
          name:"",
          lane:"8",
          races:'3',
          key:'3'
              },
  ]
  
   
    return(
      <div style={{background:"#FDD3D3"}} >
       <Row style={ROW} >
                <Col span={24}><p id="lane">Pick a Lane to enter</p></Col>
            </Row>
            <Row style={ROW} >
                <Col offset={1} style={LanE} span={2.5}>Open Lane</Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>2</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>3</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>4</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>5</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>6</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>7</label></Button></Col>
               
            </Row>
          <Row  style={{paddingBottom:"30px"}}>
          <Col offset={8} span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>8</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>9</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>10</label></Button></Col>
                <Col  span={2.5} ><Button onClick={showModal} id="btn-btn" style={styLE} ><label style={Lable}>11</label></Button></Col>
          </Row>
         <Table   scroll={{x:400}} columns={columns} dataSource={data} pagination={false} 
          
          
         />
          <Modal   visible={isModalVisible} onOk={handleOk}  >
              <Row span={24}>
            <Col offset={6} span={12} >
            <h4 style={{textAlign:'center'}}>Juvinile Jubile</h4>
            </Col>
             <Col offset={4}  style={{textAlign:'center'}}  span={2} >
             <button onClick={handleCancel} style={{background:'transparent',border:'none',fontSize:'30px'}}><i class="fa fa-times" aria-hidden="true"></i></button>
             </Col>
              </Row>
              <Row className='d-flex justify-content-around'>
                  <Col  ><label style={{fontWeight:'bolder',fontSize:'18px'}}>Packing Order :<span style={{background:'black',color:'white',padding:'5px 15px',borderRadius:'5px',marginLeft:'10px'}}>A</span></label></Col>
                  <Col><input style={{width:'300px',height:'40px',textAlign:'center',borderRadius:'30px',border:'1px solid #449EFF'}}  placeholder="holla"></input></Col>
                  <Col><button style={{ background: "#DD5859", color: 'white',border:'none',padding:'10px 25px',borderRadius:'5px'}}> <span><i class="fa fa-sliders" aria-hidden="true"></i></span> Filter</button></Col>
              </Row>
          <Table   scroll={{x:400}} columns={columns} dataSource={data} pagination={false} 
          
          
          />
                                </Modal>
      </div>
    );
  };

  const data = [{
    name: 'Juvinile Jubile',
    age: 'Chic',
    address: 'US San Francisco',
    distance: '1600m',
   
    key: '1'
},
{
    name: 'Juvinile Jubile',
    age: 'B',
    address: 'US San Francisco',
    distance: '1600m',
    key: '2'
},
{
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    distance: '1600m',
    key: '3'
}, {
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    distance: '1600m',
    key: '4'
},
]
const columns = [
    {
        title: 'Event',
        render: (text, record) => {
            return (
                <div className='event'  id="name-div">
                    
                    {record.name}
                   
                    {/* {record.name.split(" ")[0]}  {record.name.split(" ")[1]} */}
                    {/* {record.name.split(" ")[0]} <br /> {record.name.split(" ")[1]} */}
                </div>)
        },
        
        key: 'key'
    },
    {
        title: 'Location',
       response:"sm",
        render: (text, record) => {
            // console.log(record.address);
            return (
                <div  id="name-div">
                    {record.address}
                    

                    {/* {record.address.split(" ")[0]} {record.address.split(" ")[1]} <br /> {record.address.split(" ")[2]} */}
                </div>

            )
        },
        key: 'key'
    }, {
        title: 'Pecking order',
       
        render: (text, record) => {
            return (
                <div style={{ textAlign: "center", background: "#2B2B2B", color: "white", width: "37px", paddingTop: "5px", borderRadius: "3px", height: "32px", margin: "auto" }}>
                    {record.age}
                </div>
            )
        },
        key: 'key'
    },
    {
        title: 'Distance',
       
        render: (text, record) => {
            return (
                <div id="name-div">
                    {record.distance}
                </div>
            )
        }
    },

    {
        title: 'Terrain',
       
        render:() =>{
            return(
                <div style={{textAlign:"center"}}>
                   <a href="#"> <img style={{height:'20px',width:'20px'}} src={Box}/></a>
                </div>
            )
        }
    },
    {
        title: 'Entry Fee',
     
        render:()=>{
            return(
                <div id="name-div">
                    <p> <span style={{fontWeight:'bold',color:"#27B18A"}}>$5.99</span>USD</p>
                </div>
            )
        }
    },
    {
        title: 'Prize Pool',
        
        render:()=>{
            return(
                <div id="name-div">
                       <p> <span style={{fontWeight:'bold',color:"#27B18A"}}>$5.99</span>USD</p>
                </div>
            )
        }
    },
    {
        title: 'Capacity',
    
        render:()=>{
            return(
                <div id="name-div">
                    <p>3/8</p>
                </div>
            )
        },
    
    },
]


  return (
    <div  >
        {/* {jsonData && jsonData.map((value)=>(<p>{value.title}</p>))} */}
        <Table 
        scroll={{x:400}}
        id='tabb'
      columns={columns}
    
      expandRowByClick={true}
      expandable={{ expandedRowRender }}
    //   onExpand={onTableRowExpand}
      dataSource={data}
      pagination={true}
    //   rowKey={(record) => record.key}
    />
    </div>
  );
}
export default NestedTable;