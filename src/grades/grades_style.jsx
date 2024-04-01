import React from 'react';
import styled from "styled-components";

export const GradeContainer = styled.div`
${'' /* height: 70rem; */}
${'' /* background-color: whitesmoke; */}
display: flex;
${'' /* flex-direction: column; */}
`

export const GradeTitle = styled.h2`
text-align: center;
`

export const LeftDiv = styled.div`
padding-top: 15rem;
${'' /* background-color: blue; */}
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: end;
`

export const RightDiv = styled.div`
padding-bottom: 15rem;
${'' /* background-color: lightblue; */}
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
${'' /* align-items: center; */}
`

export const GradeDiv = styled.div`
width: 25rem;
height: 40rem;
margin: 3rem 3rem;

border-radius: 25px;
background-color: white;
box-shadow: 10px 10px 35px rgb(205,205,205);
${'' /* border: 1px black solid; */}
`

export const GradeDivTitle = styled.h2`
color: ${props => props.color || 'black'};
margin-left: 1rem;
margin-top: 2rem;
margin-bottom: 0;
`

export const GradeTitleDiv = styled.div`
flex-basis: 70%;
display: flex;
flex-direction: column;
`

export const GradeInfoText = styled.p`
margin-left: 1rem;
`

export const GradeDivTop = styled.div`
display: flex;

`

export const SubjectInfo = styled.div`
display: flex;
flex-direction: column;
`

export const SubjectTitle = styled.h4`
margin: 0 3rem;
`

export const SubjectDesc = styled.li`
margin: 0;
margin-left: 4rem;
`

export const GradeImg = styled.img`
width: 230px;
${'' /* margin-left: 2rem; */}
`