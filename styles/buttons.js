import styled from "styled-components";

export const NumberPad = styled.div`
    background-color:#303030;
    width:100%;
    cursor:pointer;
    color:white;
    padding: 10% 0;
    font-family:"Orbitron",Verdana;
    
    &:hover{
        background-color:#505050;
    }
    &:active{
        color:black;
    }
`

export const OperatorPad = styled.div`
    // background-color:#E92900;
    position:relative;
    background-color:#101010;
    width:100%;
    cursor:pointer;
    color:orange;
    padding: 11% 0;
    
    font-weight:bold;
    &:hover{
        background-color:#202020;
    }
    &:active{
        color:black;
    }
`

export const Display1 = styled.div`
    font-family:"Orbitron", Verdana;
    text-align:right;
    font-size:1.2rem;
    color:orange;
    font-weight:bold;
    margin: 1% 0;
`
export const Display2 = styled.div`
    font-family:"Roboto",Verdana;
    text-align:right;
    font-size:1rem;
    color:white;
    margin: 1% 0;
`