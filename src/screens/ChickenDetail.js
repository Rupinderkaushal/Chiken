import React,{useEffect} from "react";
import thumbnail from "../assests/images/chicken-thumbnail.png";


import "./ChickenDetail.css";
import { useDispatch, useSelector } from 'react-redux';
import { coopDetailAction } from "../redux/actions/CoopsActions";
import { useParams } from "react-router";
import CoopDetailComponent from './../Components/CoopDetailComponent';

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("Heritage", "Dorking"),
  createData("Perfection", "96%"),
  createData("Stock", "Stock"),
  createData("Talent", "Talent"),
  createData("Races", 12),
  createData("Beak", "Orange"),
  createData("Comb", "Red"),
  createData("Winnings", "$5.99"),
  createData("Situations", "Race Pen"),
  createData("Gender", "Roaster"),
  createData("Wattle", "Red"),
  createData("Color", "Orange"),
  createData("Background", "Background"),
  createData("Stripes", "Stripes"),
  createData("Eyes", "Eyes"),
  createData("History", "History"),
  createData("Pop", "Pop"),
  createData("Peacking Order", "Class V"),


];

function ChickenDetail() {

  const dispatch = useDispatch()
  
  const {id} = useParams()

  const {loading,success,coop} = useSelector(state => state.coopDetailReducers)

  

  useEffect(()=>{

    if(id){
      dispatch(coopDetailAction(id))
    }
  },[id])

  return (
    <div className="chickenDetail">

      {/* {coop} */}

        {/* function CoopDetailComponent({thumbnail,ownerName,chickenName,attributes}) { */}

      <CoopDetailComponent coop={coop} thumbnail={thumbnail} ownerName="Jhon" chickenName="Flight" attributes={rows}/>

    </div>
  );
}

export default ChickenDetail;
