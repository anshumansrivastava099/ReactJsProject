import React from 'react'
import web from '../src/images/home.svg';
import Common from './Common'



const Home = ()=>{

    return (
        <>
        <Common name='Grow your business' imgsrc={web} visit='/service' btname="Get Started" />
        </>
              
    )

}

export default Home;