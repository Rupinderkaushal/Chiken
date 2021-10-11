import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCoopAction } from "./../../redux/actions/CoopsActions";

import "../Navbar/Navbar.css";
import { Row, Col, Divider, Select, Menu, Dropdown } from "antd";

import { Modal, Button } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import Logo from "../../assests/images/Logo.png";
import vector from "../../assests/images/b.png";
import vector1 from "../../assests/images/a.png";

import "antd/dist/antd.css";
import useWindowDimensions from "./WindowDimen";
import { Link, useHistory } from "react-router-dom";
import MyCoopComponent from "../MyCoopComponent";
import { SEARCH_COOP_RESET } from "../../redux/constants/myCoopConstants";
import EthereumWallet from "../EthereumWallet";

const { Option } = Select;
// import Select from 'rc-select';

let open = false;
const Navbar = () => {
  //    ############### Model handler ###########
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const searchRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const { loading,error, success, searchResult } = useSelector(
    (state) => state.searchCoopReducer
  );

  if (searchResult && success) {
    alert("search found ");
  }
  const showModal = async () => {
    dispatch({
      type: SEARCH_COOP_RESET,
    });

    console.log("yes show modal ...");
    setIsModalVisible(true);
    setInputText("");

    // searchRef.current.focus();
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { Search } = Input;

  const onSearch = async (value) => {
    console.log(value);

    setInputText(value);

    dispatch(searchCoopAction(value));
  };

  const myComponentClinkHandler = (id) => {
    handleOk();
    handleCancel();
    history.push(`/chicken-detail/${id}`);
  };

  //  #################### End Modal Handler #########################
  const menu = (
    <Menu style={{ width: "150px" }}>
      <Menu.Item key="0">
        <Link to="/enter-race">Enter Race</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/scheduled">Scheduled</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/results">Results</Link>
      </Menu.Item>
    </Menu>
  );

  const menu1 = (
    <Menu style={{ width: "150px" }}>
      <Menu.Item key="0">
        <Link to="/myCoops">My Coops</Link>
      </Menu.Item>
      <Menu.Item key="1">
      
        <Button type="text" onClick={showModal}>Search</Button>
      </Menu.Item>
    </Menu>
  );

  const { height, width } = useWindowDimensions();

  const change = () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("nav-col-two");
    if (!open) {
      hamburger.classList.add("open");
      menu.style.display = "block";
    } else {
      hamburger.classList.remove("open");
      menu.style.display = "none";
    }
    open = !open;
  };

  useEffect(() => {
    // console.log(width);
    const menu = document.getElementById("nav-col-two");
    if (width < 850) {
      menu.style.display = "none";
    } else menu.style.display = "block";
  }, [width]);

  const RowStyle = {
    background: "rgba(255,255,255,0.7)",
    padding: "10px 25px",
  };

  return (
    <div style={{ width: "100%" }}>
      <Modal
        // title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onOk={() => setIsModalVisible(false)}
      >
        <Button danger type="primary" className="modelCloseBtn" onClick={()=>setIsModalVisible(false)}> close </Button>
            <Search
              ref={searchRef}
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
      {searchResult &&
        <div className="results">
    
            {searchResult.map((val) => (
              <div
                className="searchResult"
                onClick={() => myComponentClinkHandler(val.id)}
              >
                <MyCoopComponent
                  key={val.id}
                  id={val.id}
                  img={val.img}
                  name={val.name}
                  // dorking={val.dorking}
                  // talent={val.talent}
                  // spicy={val.spicy}
                />
              </div>
            ))}
        </div>
}

{error && <div className="results"> 
  No Data !!!
</div>}

      </Modal>


{/* ################################## End Modal ################## */}

      <Row
        id="main-row"
        justify="space-between"
        align="middle"
        span={24}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={RowStyle}
      >
        <Col>
         <Link to="/"> <img id="main-logo" src={Logo} /> </Link>
        </Col>

        <Col>
          <div onClick={change} id="hamburger">
            <div></div>
          </div>
        </Col>
        <Col id="nav-col-two">
          <Row>
            <Col>
              <div className="d-flex col-a">
                <Dropdown overlay={menu} trigger={[`click`]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    href="#"
                  >
                    Race <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                </Dropdown>

                <Dropdown overlay={menu1} trigger={[`click`]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    href="#"
                  >
                    Chickens <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                </Dropdown>

                <a href="#">Tutorial</a>
              </div>
            </Col>
            <Col>

              <EthereumWallet/>

            
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
