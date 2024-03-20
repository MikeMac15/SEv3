import Emailer, { ReachUs, ContactTitle } from "./Emailer";
import { ContactDiv, FullLocationDiv, LocationDiv } from "./location_style";
import styled from "styled-components";

const Divider = styled.p`


background-color: whitesmoke;
text-align: center;
margin:0;
padding-bottom: 3rem;
`

export default function Location(){

    return(

        <>
        <ContactTitle color="black">Contact Us.</ContactTitle>
                <ReachUs />
        <Divider>_____________________________________________________________________________________________________________________________________________________</Divider>
        <FullLocationDiv>


                <Emailer/>

        </FullLocationDiv>
            
        
        </>
    )
}