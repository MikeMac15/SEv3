
import '../grades/service-style.css'
import { BaseDiv} from "./one_style"
import './One.css'

import Offered from "./components/Offered"

import Intro from "./components/Intro"


export default function One(){

   
    return (<>

        {/* <Snav /> */}
        
        <BaseDiv height='auto' >
            <Intro/>
        </BaseDiv>
        <BaseDiv className="wave" height='3rem' color="#18324a">
            <div className="custom-shape-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

        </BaseDiv>
        <BaseDiv height='auto' color='#e9c680'>

        <BaseDiv color='#e9c680' height='45rem'  $flex='column'>
            
           
            <Offered />
           
            
        </BaseDiv>

        </BaseDiv>

        <BaseDiv height='3rem'>
            <div className="custom-shape-divider-top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </BaseDiv>
        
        
        
    </>
    )
}