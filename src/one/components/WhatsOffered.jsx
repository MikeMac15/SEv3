import { DetailsDiv, FullOfferedDiv, ImgDiv } from "../one_style";
import Details from "./Details";


export default function WhatsOffered({img, title, words}){

    return (
        <FullOfferedDiv>
        
            <ImgDiv>{img}</ImgDiv>
            
            <Details title={title} words={words} />

        </FullOfferedDiv>
    )
}