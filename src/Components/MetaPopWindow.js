import React, { useState ,useEffect} from 'react'
import "./MetaPopWindow.css"
import { Modal, Button } from 'antd';


function MetaPopWindow() {

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
  
    useEffect(()=>{

        showModal()

    },[])

    return (
        <div className="metaPopWindow">

<Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export default MetaPopWindow
