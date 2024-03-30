import { useRef, useState } from "react"
import styled from "styled-components"
import '../index.css'
import './service-style.css'


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger,TextPlugin);

const ServDiv = styled.div`
padding: 2.5rem 15rem;
${'' /* height: 40rem; */}
${'' /* background: whitesmoke; */}
display:flex;
flex-direction: column;

justify-content: center;
${'' /* align-items: center; */}
background-image: url('/lines.svg');
${'' /* background-repeat: no-repeat; */}
${'' /* background-size: cover; */}

`

const ServiceCont = styled.div`
padding:0rem 0;
display: flex;
`

const ServTitle = styled.h2`
font-size: 2rem;
letter-spacing: 2px;
text-align: center;
color: black;
margin: 0;
text-shadow: 6px 5px 4px rgba(180, 145, 91, 0.3);
`



const ContentDiv = styled.div`
display: flex;
width: 100%;
height: 100%;
${'' /* background: red; */}

`

const Description = styled.p`
font-size: 1.25rem;
${'' /* margin-left: 3rem; */}
width: 75%;
text-indent: 3rem;
font-family: Georgia;
text-shadow: 6px 5px 4px rgba(180, 145, 91, 0.3);
`
const ServiceImage = styled.img`
height: 500px;
width: 500px;
`
const TitleImg = styled.img`
height: 150px;
width: 600px;
opacity: .5;
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
const MenuDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

${'' /* transition: 1s ease-in-out; */}

`

const Sep = styled.div`
background: lightblue;
height: 0.1px;
width: 10rem;
margin: 0;
`



// const ServiceContent = ({title, description, img}) => {
//     return (<MenuDiv width='100%'>
//                 <ServTitle>{title}</ServTitle>
//                 <Description>{description}</Description>
//             </MenuDiv>)
// }

const Service = ({title, description, imgSrc, reverse = false}) => {

    const serviceContainer = useRef();

   
    useGSAP(()=>{
        gsap.from(".service",{
            scrollTrigger: {
                trigger: '.service',
                start: '20px 80%'
            },
            scale: 0,
            duration: 0.5,
            ease: 'sine.inOut',
            stagger: {
                each: 0.2
            }
        }
        );

        gsap.from('.servImg',{
            scrollTrigger: {
                trigger: '.servImg',
                start: '20px 80%'
            },
            scale: 0,
            x: 450,
            ease: 'power2',
            rotation: 360,
            duration: 1
        });

        gsap.from('.servImg2',{
            scrollTrigger: {
                trigger: '.servImg2',
                start: '20px 80%',
                
            },
            scale: 0,
            x: -450,
            ease: 'power2',
            rotation: -360,
            duration: 1
        })

    },{scope: serviceContainer});
    
    if (reverse){
        return(
                <ServiceCont ref={serviceContainer}>
                <div className="service">

                    <MenuDiv>
                        <ServTitle>{title}</ServTitle>
                        <Description>{description}</Description>
                    </MenuDiv>
    
                </div>
                    <ServiceImage className="servImg" src={imgSrc} />
                </ServiceCont>
        )

    } else {
        return(
            <ServiceCont ref={serviceContainer}>
                <ServiceImage className="servImg2" src={imgSrc} />
                <div className="service">


                <MenuDiv width='100%'>
                    <ServTitle>{title}</ServTitle>
                    <Description>{description}</Description>
                </MenuDiv>

                </div>
            </ServiceCont>
    )

    }
}



export default function Services(){
    const titleList = ['Tutoring', 
    'Proctored Testing',
    'Study Skills',
    'Workshops',
    'Credit Retrieval',
    'GED Classes']
    const descrList = ["Some students may just need help with the schoolwork that they are currently working on in school. Most rural schools have very few, if any, tutoring programs in the school. Although there are online resources, many students that are already struggling have a hard time learning without in-person help.", 
    "We offer proctored testing services to ensure fairness and authenticity in assessments. Whether you're a student needing a monitored environment for exams or an organization requiring professional oversight for certifications, our experienced staff ensures a comfortable, controlled, and trustworthy testing experience.",
    'Students may need help getting organized, using their time wisely and learning how to study more effectively. We will offer workshops that families can tap into with ongoing support to make sure their student is successful.',
    'We will also have workshops for families that need help with FAFSA, college applications and essay writing.',
    'Many high school students have found themselves shy of credits for graduation by their Senior year. Soaring Eagle Educational Center will team up with accredited organizations to help students make up credits at their own pace.',
    "Our comprehensive curriculum, personalized instruction, and supportive learning environment empower students to master the skills needed to pass the GED exam with confidence. Whether you're aiming to enhance your employment prospects or pursue further education, our dedicated instructors are here to guide you every step of the way. Join us and take the first step towards a brighter future with our GED program."]

    const colorList = [
        ['#854242','#f7dfdf','#c94b4b'],
        ['#f09148','#f7e7df','#c98a4b'],
        ['#ffb700','#f7f5df','#c9b24b'],
        ['#566636','#e9f7df','#8ac94b'],
        ['#689bad','#dfe8f7','#4b5bc9'],
        ['#9c65f0','#f5dff7','#b24bc9']];
    
    
    const [color, setColor] = useState(colorList[0]);
    
   
    useGSAP(()=>{
        gsap.from(".titleImg",{
            scrollTrigger: {
                trigger: '.titleImg',
                start: '20px 80%'
            },
            duration: 1,
            
            scale: 0,
            y: -100,
            
            ease: 'bounce.out',
            stagger: {
                each: 0.2
            }
        }
        );
    })


    return (
    <>

    {/* <div className="line-gradient">
<svg width="208" height="1163" viewBox="0 0 208 1163" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_8_7" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" >
<path d="M110 1.99994C110 1.99994 244 24.9999 110 82.9999C-24 141 -41.926 231.443 110 346C278.559 473.099 188.309 622.027 110 667C49.8448 697.427 -46.0707 817.311 110 929C245.78 1026.17 212 800 110 1038C7.99997 1276 110 1094 110 1094" stroke="url(#paint0_linear_8_7)" stroke-width="4"/>
</mask>
<g mask="url(#mask0_8_7)">
<rect x="-44" y="-13" width="298" height="1340" fill="url(#paint1_linear_8_7)"/>
</g>
<defs>
<linearGradient id="paint0_linear_8_7" x1="104.08" y1="1.99994" x2="104.08" y2="1160.54" gradientUnits="userSpaceOnUse">
<stop stopColor="#D6A2A2"/>
<stop offset="1" stopColor="#D22C2C"/>
</linearGradient>
<linearGradient id="paint1_linear_8_7" x1="105" y1="-13" x2="105" y2="1327" gradientUnits="userSpaceOnUse">
<stop stopColor="#0DE2FF"/>
<stop offset="0.59" stopColor="#FFE5B2"/>
<stop offset="1" stopColor="#0BFFF0"/>
</linearGradient>
</defs>
</svg>

</div> */}

        {/* <ServTitle className="sTitle">Other services we have to offer.</ServTitle> */}
        
        
        
        <ServDiv>
        
            <div className="titleImg">
            Services
            </div>

                {/* <ServiceContent  description={description} /> */}

                <div className="service t">
                <Service title={titleList[0]} description={descrList[0]} imgSrc='/servicePictures/newTutor.png' />
                </div>
                <div className="service">
                <Service title={titleList[1]} description={descrList[1]} imgSrc='/servicePictures/testing.svg' reverse />
                </div>
                <div className="service">
                <Service title={titleList[5]} description={descrList[5]} imgSrc='/servicePictures/gedNew.svg' />
                </div>
                <div className="service">
                <Service title={titleList[4]} description={descrList[4]} imgSrc='/servicePictures/ged.svg' reverse/>
                </div>
                <div className="service">
                <Service title={titleList[2]} description={descrList[2]} imgSrc='/servicePictures/credit.svg' />
                </div>
                <div className="service">
                <Service title={titleList[3]} description={descrList[3]} imgSrc='/servicePictures/workshops.svg' reverse/>
                </div>

            
           
                
          

        </ServDiv>
    
    </>
    )
}