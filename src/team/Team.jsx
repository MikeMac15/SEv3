import { Card, CardsDiv, TeamFullDiv, TeamTitle, TeamImg, TeamInfo, InfoDiv, TeamName } from "./team_style";
import React from 'react';
export default function Team(){

    return (

        <TeamFullDiv height='50rem'>
            <TeamTitle>Meet The Team</TeamTitle>

            <CardsDiv>
            
                <Card>
                <TeamImg  src='/newBrenda.png'/>
                <TeamName>Brenda VanSlyke</TeamName>
                <InfoDiv>
                <TeamInfo>Brenda VanSlyke graduated high school from Colville in 1984.
                She went to college at Eastern Washington University and received a Bachelor's Degree with a major in Psychology and a minor in math and science.
                </TeamInfo>
                <TeamInfo>She then went on to get her Master’s degree through Phoenix in secondary education mathematics.
                For 17 years, Brenda worked as an adolescent counselor for extremely at risk kids.</TeamInfo>
                <TeamInfo>
                She then went to work at Inchelium school district for 12 years working as a high school math teacher.For the past five years, she has worked for WSU as the MESA (mathematics, engineering, and science achievement) director.
                She focuses on the underrepresented in Science, Technology, Engineering, and Math, including Computer Science (STEM).
                 </TeamInfo>
                </InfoDiv>
                    
                </Card>
                <Card>
                <TeamImg  src="/newShelley.png" />
                <TeamName>Shelley Lawrence</TeamName>
                <InfoDiv>
                <TeamInfo>Shelley Lawrence graduated from Inchelium in 1987, and graduated college from Eastern Washington University with a degree in K- 8 education and a major in Reading. 
                She also received a Master’s degree through Eastern for Curriculum and Instruction.</TeamInfo>
                <TeamInfo>After that, she got her Administration credentials through WGU. She has worked for the Inchelium school since 1992, substituting for four years and working as a para educator for one year. 
                She was then hired on full time in 1997.</TeamInfo>
                <TeamInfo>She has taught 4th, middle, and high school. For the last six years, she has been the Title I Director, Special Education Coordinator, testing coordinator, and librarian.</TeamInfo>
                </InfoDiv>
                </Card>
            </CardsDiv>

        </TeamFullDiv>
    )
}