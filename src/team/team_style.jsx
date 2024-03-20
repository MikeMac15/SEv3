import styled from "styled-components"

export const TeamFullDiv = styled.div`
${'' /* height: ${props => props.height || '24rem'}; */}

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${'' /* background: antiquewhite; */}
font-size: 1.25rem;
background-image: url('/newLines.svg');
background-repeat: no-repeat;
background-size: cover;
`
export const TeamTitle = styled.h2`
color: black;

`

export const CardsDiv = styled.div`
${'' /* height: 55rem; */}
width: 80%;
${'' /* background-color: black; */}
display: flex;
${'' /* align-items: center; */}
${'' /* justify-content: center; */}


margin: 0 3rem;
`

export const Card = styled.div`
padding-bottom: 5rem;

width: 50%;
${'' /* background-color: blue; */}

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

${'' /* margin: 0 2rem; */}

`

export const TeamImg = styled.img`
scale: 0.9;
${'' /* height: {props => props.height || '400px'}; */}
${'' /* border-radius: 15rem; */}
margin-bottom: 2rem ;
`
export const InfoDiv = styled.div`
display:flex;
flex-direction: column;

align-items: center;
background: rgba(250,250,250,.6);
border-radius: 4rem;
margin-top: 1rem;
`

export const TeamName = styled.h2`
margin: 0;
`

export const TeamInfo = styled.p`
text-indent: 30px;
width:75%;
font-size: 1.5rem;
margin: 0.25rem 0;
${'' /* text-align: center; */}
`