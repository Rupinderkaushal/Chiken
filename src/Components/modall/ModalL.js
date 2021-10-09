import React,{useState} from 'react';
import {Modal, Form, Button,Row,Col} from 'antd';

const ModalL = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
const [form] = Form.useForm();
const showModal = () => {
    setIsModalVisible(true);
};

const handleOk = () => {
    setIsModalVisible(false);
};

const handleCancel = () => {
    setIsModalVisible(false);
};

// const onSubmit = useCallback((values) => {
// // do your staff with values
// }, []);

// useCallback(
//     () => {
//         callback
//     },
//     [input],
// )

// const closePopup = useCallback(() => {

// }, [form]);

    return (
        <div>
            <Button onClick={showModal}>Hello</Button>
<Modal
  visible={isModalVisible}
  
 onOk={handleOk}
 onCancel={handleCancel}
>
  <Form style={{width:"400px",border:'solid'}}
 layout="vertical"
  >
     <Col  className='d-flex'>
     <Form.Item label="usename"
      >
          <input type="text"/>
          
      </Form.Item>
      <Form.Item label="usename" name='hello2'>
          <input type="text"/>
      </Form.Item>
     </Col>
  </Form>
</Modal>
        </div>
    )
}

export default ModalL
