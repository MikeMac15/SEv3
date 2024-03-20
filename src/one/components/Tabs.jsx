import { useState } from "react"
import { TabBar, TabDiv, TabTitle, TabUnderline } from "../one_style"
import WhatsOffered from "./WhatsOffered"
// import TabTitleComp from "./TabTitle"

const TabTitleComp = ({title, onHover, color}) => {
    const [entered, setEntered] = useState(false)

    const handleEnter = () => {
        setEntered(true)
        onHover()
    }
    return(
        <TabDiv>

        <TabTitle
        color={color}
        
        onMouseEnter={handleEnter}
        >
            {title}
        </TabTitle>
        <TabUnderline className={entered ? 'entered' : ''}/>
        </TabDiv>
    )
}

export default function Tabs(){
    const titleList = ['Tutoring', 
                    'Study Skills',
                    'Credit Retrieval',
                    'Individualized Instruction',
                    'Home Schooling',
                    'Workshops',
                    'Math Bridges']
    const wordsList = ['Tutoring', 
                    'Study Skills',
                    'Credit Retrieval',
                    'Individualized Instruction',
                    'Home Schooling',
                    'Workshops',
                    'Math Bridges']
    const colorList = ['red', 'orange', 'gold', 'green', 'blue', 'purple', 'pink']
    const [title, setTitle] = useState(titleList[3])
    const [words, setWords] = useState(wordsList[3])
    const [img, setImg] = useState('')
    const [color, setColor] = useState('grey')

    const handleTab = (indx) => {
        setTitle(titleList[indx])
        setWords(wordsList[indx])
        setColor(colorList[indx])
    }


    return (<>
        <TabBar>

            <TabTitleComp onHover={()=> handleTab(0)} title='Tutoring' color='red'/>
            <TabTitleComp onHover={()=> handleTab(1)} title='Study Skills' color='orange' />
            <TabTitleComp onHover={()=> handleTab(2)} title='Credit Retrieval' color='gold'/>
            <TabTitleComp onHover={()=> handleTab(3)} title='Individualized Instruction' color='green' />
            <TabTitleComp onHover={()=> handleTab(4)} title='Home Schooling' color='blue' />
            <TabTitleComp onHover={()=> handleTab(5)} title='Workshops' color='purple' />
            <TabTitleComp onHover={()=> handleTab(6)} title='Math Bridges' color='pink' />
        </TabBar>
        {/* <TabSpace color={color} height='1rem' ></TabSpace> */}
        <WhatsOffered img={img} title={title} words={words} />
    </>)
}