import React from 'react';
import Snav from "./nav/s_nav"
import { FullNavDiv } from "./nav/navStyle"
import One from "./one/One"
import Team from "./team/Team"
import Connect from "./connect/Connect"
import Pricing from "./pricing/Pricing"
import Location from "./location/Location"
import Footer from "./footer/Footer"
import Grades from "./grades/Grades"
import Services from "./grades/newServices"
import Navbar from "./nav/nav"
import About from "./Home/about"
import WhyUs from "./Home/Why"


export default function Home(){
    return (
       
        <>
<Navbar/>
            {/* <Snav /> */}

                <One />
                {/* <WhyUs />
                <Services />
                <About /> */}
                
                {/* <Team />
                <Pricing />
                
                <Location/>
                <Footer/> */}

        </>
    
    )
}