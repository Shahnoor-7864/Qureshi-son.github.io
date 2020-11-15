import React from 'react';
import {NavLink} from "react-router-dom"
import Common from './Common';
import apple from '../src/images/startup-concept-people.jpg'

const About = () => {
    return(
        <>
    <Common name = "Welcome to About Page " visit = "/contact" btname = "contact now"
       imgsrc = {apple}
    />
      </>
    )
}


export default About;