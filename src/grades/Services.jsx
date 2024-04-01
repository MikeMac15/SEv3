import { useState } from "react"
import styled from "styled-components"
import React from 'react';
const ServDiv = styled.div`
padding-top: 5rem;
height: 40rem;

display:flex;
flex-direction: column;

`

const ServTitle = styled.h2`
font-size: 2rem;

text-align: center;
color: black;
`

const ServContentDiv = styled.div`
margin: 0 5rem;
height: 80%;
display: flex;
${'' /* background-color: ${props => props.color || '#84a4b0'}; */}
background-color:whitesmoke;
transition: 1s ease-in-out;
border-radius: 20px;
box-shadow: 10px 10px 20px 10px #dedede;
`

const MenuDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
${'' /* margin-right: 2rem; */}
width: ${props => props.width || '22rem' };
transition: 1s ease-in-out;
background: ${props => props.color || ''};
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
`

const ContentDiv = styled.div`
display: flex;
width: 100%;
height: 100%;
${'' /* background: red; */}

`

const Description = styled.p`
font-size: 1.5rem;
margin-left: 3rem;
width: 50%;
`
const ServiceImage = styled.img`
height: 400px;
width: 400px;
`
const MenuTab = styled.h2`
font-size: 1.25rem;
${'' /* color: ${props => props.color || 'black'}; */}
padding: 0.1rem;

transition: 0.8s ease-in-out;

&:hover {
    color: white;
}

`

const Sep = styled.div`
background: lightblue;
height: 0.1px;
width: 10rem;
margin: 0;
`



const ServiceContent = ({title, description, img}) => {
    return (<MenuDiv width='100%'>
<ServTitle>{title}</ServTitle>
<ContentDiv>

<Description>{description}</Description>
<ServiceImage src='/servicePictures/SEED.png' />

</ContentDiv>
    </MenuDiv>)
}



export default function Services(){
    const titleList = ['Tutoring', 
    'Proctored Testing',
    'Study Skills',
    'Workshops',
    'Credit Retrieval',
    'GED Classes']
    const descrList = ["Some students may just need help with the schoolwork that they are currently working on in school. Most rural schools have very few, if any, tutoring programs in the school. Although there are online resources, many students that are already struggling have a hard time learning without in-person help.", 
    '',
    'Students may need help getting organized, using their time wisely and learning how to study more effectively. We will offer workshops that families can tap into with ongoing support to make sure their student is successful.',
    'We will also have workshops for families that need help with FAFSA, college applications and essay writing.',
    '',
    '',
    '']

    const colorList = [
        ['#854242','#f7dfdf','#c94b4b'],
        ['#f09148','#f7e7df','#c98a4b'],
        ['#ffb700','#f7f5df','#c9b24b'],
        ['#566636','#e9f7df','#8ac94b'],
        ['#689bad','#dfe8f7','#4b5bc9'],
        ['#9c65f0','#f5dff7','#b24bc9']]
    
    const [title, setTitle] = useState(titleList[0])
    const [description, setDescription] = useState(descrList[0])
    const [color, setColor] = useState(colorList[0])
   
    const handleTab = (indx) => {
        setTitle(titleList[indx])
        setDescription(descrList[indx])
        setColor(colorList[indx])
        
    }



    return (<>
        <ServTitle>Other services we have to offer.</ServTitle>
        <ServDiv>
            <ServContentDiv color={color[1]} color2={color[0]}>
            


            <MenuDiv color={color[0]}>
           
                <ServTitle>Services</ServTitle>
                <MenuTab onMouseEnter={()=> handleTab(0)} color={colorList[0][2]}>Tutoring</MenuTab>
                <Sep />
                <MenuTab onMouseEnter={()=> handleTab(1)} color={colorList[1][2]}>Proctored Testing</MenuTab>
                <Sep />
                <MenuTab onMouseEnter={()=> handleTab(2)} color={colorList[2][2]}>Study Skills</MenuTab>
                <Sep />
                <MenuTab onMouseEnter={()=> handleTab(3)} color={colorList[3][2]}>Workshops</MenuTab>
                <Sep />
                <MenuTab onMouseEnter={()=> handleTab(4)} color={colorList[4][2]}>Credit Retrieval</MenuTab>
                <Sep />
                <MenuTab onMouseEnter={()=> handleTab(5)}color={colorList[5][2]} >GED Classes</MenuTab>


            </MenuDiv>
                <ServiceContent title={title}
                description={description} />
                </ServContentDiv>

        </ServDiv>
    </>)
}