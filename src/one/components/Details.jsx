import { DetailsDiv, DetailsTitle, DetailsWords } from "../one_style";

export default function Details({title, words}){

    return (
        <DetailsDiv>
            <DetailsTitle>{title}</DetailsTitle>
            <DetailsWords>{words}</DetailsWords>
        </DetailsDiv>
    )
}