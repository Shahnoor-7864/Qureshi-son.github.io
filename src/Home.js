import React from 'react';
import web from "../src/images/bulb.jpg"
import {NavLink} from "react-router-dom"
import Common from './Common';
import apple from '../src/images/startup-concept-people.jpg'

const Home = () => {
    return(
        <>
        <Common name = "Grow your business with "   visit = "/services" btname = "Gets Started"
        imgsrc = {apple} />
    
      </>
    )
}
export default Home;

