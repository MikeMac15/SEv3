import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FooterDiv, Footerh3, Footerh4, Footerh5, F_Links, Fsec1, Fsec2, Fsec3, F2n3, FtermsDiv, SEtitle, FLogo} from './footer_style'


export default function Footer() {

    return(
<>
        <FooterDiv>
            <Fsec1>
                <SEtitle>Soaring Eagle Educational Center</SEtitle>
                <FLogo src="/SEED.png"  />
                <Footerh5>475 S Meyers St </Footerh5>
                <Footerh5> Kettle Falls, WA 99141</Footerh5>
            </Fsec1>

        <F2n3>

            <Fsec2>
                <Footerh3>Quick Links</Footerh3>
                <F_Links>Services</F_Links>
                <F_Links>Pricing</F_Links>
                <F_Links>About</F_Links>
                <F_Links>FunZone</F_Links>
            </Fsec2>

            <Fsec3>
                <Footerh3>Connect</Footerh3>
                <Footerh5>Phone:</Footerh5>
                <Footerh4>(509) 738-9129</Footerh4>
                <Footerh5>Email:</Footerh5>
                <Footerh4> contact@seecntr.org</Footerh4>
                <F_Links>Message us</F_Links>
                <i className='bx bxl-facebook-circle'></i>
                <i className='bx bxl-instagram-alt'></i>
            </Fsec3>
        </F2n3>

        </FooterDiv>
</>
    )
}