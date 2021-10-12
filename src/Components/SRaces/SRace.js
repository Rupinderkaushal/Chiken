import { Table,Row,Col,Button } from 'antd';
import Chik  from "../../chik.png";
import React from 'react';
import Box from "../../box.png";
import clock from "../../va.png";
import clock1 from "../../vb.png";
import "../tablecol/tb.css";
function SRace() {
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
                <Col  span={10}><h3 id="hddr3" >Juvinile Jubile<span id='hddr-span' style={{fontSize:'20px',marginLeft:'50px'}}><small>Starts In: <label style={{margin:'0px 10px'}}><img src={clock}/><label><img style={{marginLeft:'-15px',marginTop:'5px'}} src={clock1}/></label></label><label>00:45:50</label></small></span></h3></Col>
                   <Col  offset={12} span={2}><Button id='srace-btn'  style={{borderRadius:'5px',fontSize:'18px',height:'37px'}} type='primary'>Watch</Button></Col>     
            </Row>
            
         <Table scroll={{x:400}} columns={columns} dataSource={data} pagination={false} />
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
}, {
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    race:'Live',
    distance: '1600m',
    key: '5'
}, {
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    distance: '1600m',
    race:'Live',
    key: '6'
}, {
    name: 'Juvinile Jubile',
    age: 'A',
    address: 'US San Francisco',
    distance: '1600m',
    race:'Live',
    key: '7'
},
]
const columns = [
    {
        title: 'Event',
        render: (text, record) => {
            return (
                <div id="name-div">
                   <a> {record.name.split(" ")[0]} <br /> {record.name.split(" ")[1]}</a>
                    {/* {record.name} */}
                </div>)
        },
        key: 'key'
    },
    {
        title: 'Location',
        render: (text, record) => {
            console.log(record.address);
            return (
                <div id="name-div">
                    {/* {record.address} */}
                    {record.address.split(" ")[0]} {record.address.split(" ")[1]} <br /> {record.address.split(" ")[2]}
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
    // {
    //     title: 'Entry Fee',
    //     render:()=>{
    //         return(
    //             <div id="name-div">
    //                 <p>$5.99</p>
    //             </div>
    //         )
    //     }
    // },
    {
        title: 'Prize Pool',
        render:()=>{
            return(
                <div id="name-div">
                    <p>$5.99</p>
                </div>
            )
        }
    },
    {
        title: 'Starts In',
        render:(text,record)=>{
            return(
                <div id="name-div">
                   {record.race}
                </div>
            )
        }
    },
]

// const onTableRowExpand = (expanded, record) => {
//     var keys = [];
//     console.log('expande', expanded)
//     console.log('', record);
//     // if(expanded){
//     //     keys.push(record.id); // I have set my record.id as row key. Check the documentation for more details.
//     // }

//     // this.setState({expandedRowKeys: keys});
// }
 

  return (
    <div >
        <Table
        scroll={{x:400}}
      columns={columns}
      expandRowByClick={true}
      expandable={{ expandedRowRender }}
    //   onExpand={onTableRowExpand}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record.key}
    />
    </div>
  );
}
export default SRace;