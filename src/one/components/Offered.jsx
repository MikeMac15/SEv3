import styled from "styled-components"



const AllCardsDiv = styled.div`
display: flex;

margin: 3rem 0;
`

const CardDiv = styled.div`
height: 450px;
width: 400px;

background-color: blue;

margin: 1rem 1rem;

border-radius: 25px;

display: flex;
flex-direction: column;
align-items: center;

background-image: url(${props => props.img || 'elem4.png'});
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: 100% 100%;



transition: box-shadow 0.8s ease, transform 0.3s ease-in-out;
&:hover{
    transform: translateY(-3rem);
    box-shadow: 1px 1px 20px 10px white;
}

`

const CardTitle = styled.h2`
font-size: 2rem;
margin-top: 2rem;
`



export default function Offered() {
    return (<>
            <CardTitle>How can we best serve your needs?</CardTitle>
            <AllCardsDiv>
        <CardDiv img='/elem4.png' />
        <CardDiv img='/hs.png' />
        <CardDiv img='/ged.png' />
            </AllCardsDiv>

        
        </>)
}