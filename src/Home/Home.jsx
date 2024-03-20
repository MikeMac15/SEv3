import Snav from "../nav/s_nav"
import { FullNavDiv } from "../nav/navStyle"
import One from "../one/One"
import Team from "../team/Team"
import Connect from "../connect/Connect"
import Pricing from "../pricing/Pricing"
import Location from "../location/Location"
import Footer from "../footer/Footer"
import Grades from "../grades/Grades"
import Services from "../grades/newServices"
import Navbar from "../nav/nav"


export default function Home(){
    return (
       
        <>
<Navbar/>
            {/* <Snav /> */}

                <One />
                <Services />
                <Pricing />
                {/* <Grades/> */}
                <Team />
                {/* <Connect /> */}
                <Location/>
                <Footer/>

        </>
    
    )
}