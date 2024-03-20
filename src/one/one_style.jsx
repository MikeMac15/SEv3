import styled from "styled-components";

export const BaseDiv = styled.div`
height: ${props => props.height || '25rem'};
width: ${props => props.width || '100%'};
background-color: ${props => props.color || 'white'};
display: flex;
flex-direction: ${props => props.$flex || 'row'};
justify-content: center;
align-items: center;

`
export const TabBar = styled.div`

${'' /* height: ${props => props.height || '2rem' }; */}
${'' /* width: 90%; */}
display: flex;
justify-content: center;
align-items: center;
${'' /* background-color: ${props => props.color || 'whitesmoke'}; */}
${'' /* 
    border-top-right-radius: 3rem;
    border-top-left-radius: 3rem; */}


`
export const TabDiv = styled.div`
display: flex;
flex-direction: column;
`

export const TabTitle = styled.div`
    color: ${props => props.color || 'black'};
    font-size: 1.25rem;
    padding: 0 2.14rem;
    height: 100%;
`
export const TabUnderline = styled.div`
height: .2rem;
width: 100%;
background-color: black;
&.entered {
    background-color: grey; 
     
    border-top-left-radius: 1rem;
    border-top-right-radius: 2rem;
}
`

export const FullOfferedDiv = styled.div`
height: 75%;
width: 100%;
${'' /* background-color: grey; */}
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;
`

export const ImgDiv = styled.div`
height: 90%;
width:30%;

background-color: whitesmoke;
margin: 0 2rem;

${'' /* border-bottom-left-radius: 5rem; */}
${'' /* border-top-left-radius: 3rem; */}
`

export const DetailsDiv = styled.div`
height: 100%;
width:50%;
${'' /* background-color: whitesmoke; */}

display: flex;
flex-direction: column;

border-bottom-right-radius: 5rem;
${'' /* border-top-right-radius: 3rem; */}
`

export const DetailsTitle = styled.h2`
color: ${props => props.color || 'black'};
text-align:center;
`

export const DetailsWords = styled.p`
color: grey;
margin: 0 5vw;
`