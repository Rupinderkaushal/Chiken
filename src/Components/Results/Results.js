import { Table,Row,Col,Button } from 'antd';
import Chik  from "../../chik.png";
import React from 'react';
import Box from "../../box.png";
import "../tablecol/tb.css";
function ResulT() {
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
  
    const columns =[
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
  ]
  const data= [
      {
          name:'',
          lane:'1',
          races:'12',
          key:'1'
      },
      {
  name:"",
  lane:"2",
  races:'7',
  key:'2'
      },
      {
          name:"",
          lane:"3",
          races:'3',
          key:'3'
              },
  ]
   
    return(
      <div  >
       <Row style={ROW} >
                   
                   <Col>
                  
                       <Button id='result-btn' style={{borderRadius:'5px',fontSize:'18px',height:'37px',background:'yellow',border:'none',color:'black',fontWeight:'bold'}} type='primary'>Watch Replay</Button></Col>     
            </Row>
            
         <Table scroll={{x:400}}  columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  };

  const data = [{
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    distance: '1600m',
    race:'1m 42s',
    key: '1'
},
{
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    distance: '1600m',
    race:'2m 46s',
    key: '2'
},
{
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    race:'1m 1s',
    distance: '1600m',
    key: '3'
}, {
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    race:'Live',
    distance: '1600m',
    key: '4'
}, 
]
const columns = [
    {
        title: 'Event',
        render: (text, record) => {
            return (
                <div className='event' id="name-div">
                    {record.name}
                </div>)
        },
        key: 'key'
    },
    {
        title: 'Location',
        render: (text, record) => {
            console.log(record.address);
            return (
                <div className='event' id="name-div">
                    {record.address}
                   
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
                   <a href="#"> <img src={Box}/></a>
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
   
]


 

  return (
    <div >
        <Table
        scroll={{x:400}}
      columns={columns}
      expandRowByClick={true}
      expandable={{ expandedRowRender }}
    //   onExpand={onTableRowExpand}
    id='tabb'
      dataSource={data}
      pagination={true}
      rowKey={(record) => record.key}
    />
    </div>
  );
}
export default ResulT;