import "../Tab/tab.css";
import { Tabs } from 'antd'
import React from 'react'
import NestedTable from '../tablecol/Tcollapse';
const {TabPane} = Tabs;


export const TabShow = ()=>{

    return(
        <div>
            hello world
        </div>
    )
}

const TabOne = () => {

    console.log("tab one ::")
        const click =() =>{
            return(
                <div>
                    hi this
                </div>
            )
          
        }


    
    return (
        <div>
            <Tabs >
                <TabPane   tab='Menu' key="1" >
                    <NestedTable/>
                </TabPane>
                <TabPane  tab='news' key="2" >
                    lskdkjfl
                    <TabShow/>
                    </TabPane>
                    <TabPane  tab='Gallery' key="3" >
                    
                    sdfjl
                    </TabPane>
            </Tabs>
        </div>
    )
}

export default TabOne
