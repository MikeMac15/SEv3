import { GradeContainer, LeftDiv, RightDiv, GradeDiv, GradeTitle, GradeDivTitle, SubjectInfo, SubjectTitle, SubjectDesc, GradeDivTop, GradeImg, GradeTitleDiv, GradeInfoText } from "./grades_style";

const SubjectDiv = ({title, info}) => {
    // title: string
    // info: list

    return(
        <>
            <SubjectInfo>
                <SubjectTitle>{title}</SubjectTitle>
                <ul>

                {
                    info.map((val, idx) => 
                    <SubjectDesc key={idx}>{val}</SubjectDesc>)
                }
                </ul>
            </SubjectInfo>
        </>
    )
}

export default function Grades(){

    return (
    <>

        <GradeTitle>We Provide Individual Instruction for:</GradeTitle>

        <GradeContainer>

            <LeftDiv>
                <GradeDiv>
                    <GradeDivTop>
                    <GradeTitleDiv>
                    <GradeDivTitle color="blue">Grades 7-12</GradeDivTitle>
                    <GradeInfoText>isahdoihasofd hdoifhdosihfjhofh ijfoisdhaf</GradeInfoText>
                    </GradeTitleDiv>
                    <GradeImg src="/teen.svg"/>
                    </GradeDivTop>
                    <SubjectDiv title='English:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Math:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Science:' info={['ss','ss','aa']} />

                </GradeDiv>
                <GradeDiv>
                    <GradeDivTitle color="olive">GED/Adult Education</GradeDivTitle>
                    <SubjectDiv title='English:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Math:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Science:' info={['ss','ss','aa']} />

                </GradeDiv>
            </LeftDiv>

            <RightDiv>
                <GradeDiv>
                <GradeDivTop>
                    <GradeTitleDiv>
                        <GradeDivTitle color="orange">Grades 1-6</GradeDivTitle>
                        <GradeInfoText>isahdoihasofd hdoifhdosihfjhofh ijfoisdhaf</GradeInfoText>
                    </GradeTitleDiv>
                    <GradeImg src="/teacher.svg"/>
                </GradeDivTop>
                    <SubjectDiv title='English:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Math:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Science:' info={['ss','ss','aa']} />

                </GradeDiv>
                <GradeDiv>
                    <GradeDivTitle color="red">College Prep</GradeDivTitle>
                    <SubjectDiv title='English:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Math:' info={['ss','ss','aa']} />
                    <SubjectDiv title='Science:' info={['ss','ss','aa']} />

                </GradeDiv>
            </RightDiv>

        </GradeContainer>
    </>
    )
}