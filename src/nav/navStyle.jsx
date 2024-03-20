import styled from "styled-components";

export const FullNavDiv = styled.div`
    
    ${'' /* background-color: white; */}
    z-index: 2;
    padding-top: 10px;
    ${'' /* margin: 0 1rem; */}

    background-image: url('/navbar.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    display:flex;
    justify-content:center;
    align-items:center;

    
`
export const NavDiv = styled.div`

    position: sticky;
    height: 3.5rem;
    width: 80vw;


    background-color: black;

    border-radius: 2.5rem;

    display: flex;
    align-items: center;
    
    color: white;

`

export const Tex = styled.p`
    color: white;

`