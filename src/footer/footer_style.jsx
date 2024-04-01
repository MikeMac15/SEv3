import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterDiv = styled.div`
background:  #e8a623;
// rgba(245, 195, 103)

display: flex;


padding: 4rem 0;

@media (max-width: 340px){
    
}
`
export const Fsec1 = styled.div`
// height: 20rem;

flex-basis: 40%;

display:flex;
flex-direction: column;
align-items: center;



@media (max-width: 1000px){
    padding-left: 0rem;
}


`
export const F2n3 = styled.div`
flex-basis: 60%;
display: flex;
justify-content: space-evenly;

@media (max-width: 450px){
flex-direction: column;
justify-content: center;
padding-left: 3rem;
}
`
export const Fsec2 = styled.div`
// flex-basis: 25%;

display: flex;
flex-direction: column;

@media (max-width: 450px){
    padding-bottom: 2rem;
}
`
export const Fsec3 = styled.div`
padding-left: 1rem;
padding-right: 2rem;

@media (max-width: 550px){
    padding: 0;
    }
`
export const FtermsDiv = styled.div`

`
///////////////////////// Text settings
export const Footerh3 = styled.h3`
color: white;
// font-size: 1rem;
margin-bottom: 1rem;
`
export const Footerh4 = styled.h4`
color: white;
// font-size: 1rem;
margin-bottom: 5px;

@media (max-width: 340px){
    font-size:.75rem;
}
`
export const Footerh5 = styled.h5`
color: white;
// font-size: 1rem;
margin-bottom: 5px;

`



///////////////////////// Left footer
export const FLogo = styled.img`
height: 100px;
width: 150px;
`
export const SEtitle = styled.h2`
color: white;
padding-bottom: 1rem;
padding-left:1rem;
text-align: center;


`

///////////////////////// Mid footer
export const F_Links = styled(Link)`
padding-bottom: .1rem ;

`
///////////////////////// Right footer
/////////////////////////