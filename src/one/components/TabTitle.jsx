import { useState } from "react";
import { TabDiv, TabTitle, TabUnderline } from "../one_style";

export default function TabTitleComp({title, onHover }){
    const [entered, setEntered] = useState(false)

    const handleEnter = () => {
        setEntered(true)
        onHover();
    }
    return(<TabDiv>

        <TabTitle
        className={entered ? 'entered' : ''}
        onHover={()=>handleEnter}
        >
            
        
        </TabTitle>
    </TabDiv>
    )
}