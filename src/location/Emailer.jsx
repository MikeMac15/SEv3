import styled from "styled-components";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { emailJSKey, googleMapsKey } from "../../keys";

const FullEmailerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;

    ${'' /* background: grey; */}

    height: 100%;
    width: 100%;

    margin-bottom: 5rem;

        flex-direction: column;

    @media (max-width: 820px){
    }
    @media (max-width: 450px){
        padding: 1rem 0.5rem;
    }
    
`

const EmailDiv = styled.div`
display:flex;
justify-content: center;
${'' /* align-items: center; */}
width:100%;
height: 100%;
${'' /* padding: 100px 0; */}


${'' /* background-color: #aaa; */}
`

const MeatLeft = styled.div`
    
    
    
    background: whitesmoke;

    color: rgb(239, 183, 111);
    ${'' /* padding: 2rem; */}
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 820px){
        
        border-bottom-left-radius: 0;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
    }
    @media (max-width: 500px){
        padding: 20px 30px;

    }
`

const MapsDiv = styled.div`
flex-basis: 50%;
margin: 0;
margin-right: 5rem;


box-shadow: 10px 10px 30px 10px rgba(158, 76, 0, 0.404);

`

const EmailCard = styled.div`
margin: 0 5rem;
background: white;
padding: 2rem 5rem;
border-radius: 2rem;
box-shadow: 10px 10px 30px 10px rgba(158, 76, 0, 0.204);
`

const PotatoesRight = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: whitesmoke;
    ${'' /* color: #fff; */}

    ${'' /* flex-basis: 20%; */}

    @media (max-width: 820px){
        ${'' /* // padding: 1rem 3rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;

        box-shadow: -10px 10px 30px 10px rgba(158, 76, 0, 0.404); */}

        
    }
    @media (max-width: 375px){
        ${'' /* padding: 40px 20px; */}
    }
`
export const ContactTitle = styled.div`
    font-size: 2.5rem;
    padding-top: 5rem;
    text-align: center;
    background-color: whitesmoke;
    text-shadow: 8px 5px 7px rgba(180, 145, 91, 0.35);
    @media (max-width: 450px){
    font-size: 1.5rem;
    }
`
export const ContactTitle2 = styled.div`
    font-size: 2.5rem;
    padding: 2.5rem 0;
    text-align: center;
    ${'' /* background-color: w; */}
    text-shadow: 8px 5px 7px rgba(180, 145, 91, 0.35);
    @media (max-width: 450px){
    font-size: 1.5rem;
    }
`
const TextLabel = styled.label`
    margin-bottom: 6px;
    display: block; 

    font-size: 1.25rem;
`
const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
`
const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 450px){
        flex-direction: column;
    }
`
const InputGroup = styled.div`
    flex-basis: 40%;
`
const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid #ccc;
    outline:none;
    padding:30px;
    box-sizing: border-box;
`
const StyledButton = styled.button`
    background: #ff9000ad;
    width: 100px;
    border: none;
    outline: none;
    color:white;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(158, 76, 0, 0.804);

    &:hover{
        background: white;
        color:#ff9000ad;
        box-shadow: 0px 5px 15px 0px rgba(158, 76, 0, 0.804);   
    }
`

const StyledTable = styled.div`

display:flex;
flex-direction: row;
justify-content: center;
align-items: center;



`

const ReachTitle = styled.h5`
margin: 0;
padding-top: 1rem;
font-size: 1rem;
`

const ReachText = styled.p`
margin: 0;
`

const ReachCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 2rem;


`

const Divider = styled.div`
    width: 12px;
    background-color: #cccccc;

    @media (max-width: 820px){
        width: 100%;
        height: 12px;
    }

`

const Frame = styled.iframe`
border: 3px whitesmoke solid;
width:100%;
height:100%;
${'' /* border-radius: 2rem; */}
`


 export const ReachUs = () => {
    return (
    <PotatoesRight>
                        
        
            
            <StyledTable>
               

                <ReachCard>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                    <ReachTitle>Email:</ReachTitle>
                    <ReachText>contact@seecntr.org</ReachText>
                </ReachCard>
                <ReachCard>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path></svg>
                    <ReachTitle>Phone:</ReachTitle>
                    <ReachText>( 509 ) 738-9129</ReachText>
                </ReachCard>
                <ReachCard>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
                    <ReachTitle>Address:</ReachTitle>
                    <ReachText>475 S Meyers St
                        Kettle Falls, WA 99141</ReachText>
                </ReachCard>
                   <ReachCard>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
                        <ReachTitle>
                            Visit our Facebook page {' '} 
                        </ReachTitle>
                            <a href="https://www.facebook.com/SoaringEagleEdCenter" target="_blank">SoaringEagleEdCenter</a>
                </ReachCard>
                  
            </StyledTable>
        


    </PotatoesRight>)
}



export default function Emailer() {
    const [success, setSuccess] = useState(null)
    const form = useRef();

    const sendEmail = (e) => {
        e.prevenReachefault();
    
        emailjs.sendForm('service_zp94zsn', 'template_jw6q8gd', form.current, emailJSKey)
          .then((result) => {
            //   console.log(result.text);
              alert('Thank you for sending us a message! We will reach back out to you shortly. Have a nice day!')
              setSuccess(true)
          }, (error) => {
              console.log(error.text);
              setSuccess(false)
          });
      };


    return (

        <FullEmailerDiv>

                <EmailDiv>

                    <MeatLeft>
                    <EmailCard>

                        <ContactTitle2>Send us an email.</ContactTitle2>
                        <form ref={form} onSubmit={sendEmail}>
                            <InputRow>
                                <InputGroup>
                                    <TextLabel>*Name</TextLabel>
                                    <StyledInput required type="text" name="parent_name"/> {/* /// */}
                                </InputGroup>
                                <InputGroup>
                                    <TextLabel>*Phone</TextLabel>
                                    <StyledInput required type="text" name="phone"/>  {/* /// */}
                                </InputGroup>
                            </InputRow>
                            <InputRow>
                                <InputGroup>
                                    <TextLabel>*Email</TextLabel> 
                                    <StyledInput required type="email" name="email"/>  {/* /// */}
                                </InputGroup>
                                <InputGroup>
                                    <TextLabel>Students name</TextLabel> 
                                    <StyledInput type="text" name="child_name"/>  {/* /// */}
                                </InputGroup>
                            </InputRow>
                            <TextLabel>*Message</TextLabel>
                            <TextArea required rows="5" placeholder="Your message here." name="message"></TextArea>  {/* /// */}
                            <StyledButton type='submit'  id="btn">Send</StyledButton>
                        </form>
                    </EmailCard>
                    </MeatLeft>

                    <MapsDiv>

                    <Frame  loading="lazy" allowFullScreen
    src={`https://www.google.com/maps/embed/v1/place?q=135%20E%205th%20Ave%2C%20Kettle%20Falls%2C%20WA%2099141&key=${googleMapsKey}`}></Frame>

                    </MapsDiv>


                </EmailDiv>
       
        </FullEmailerDiv>
    
    )
}