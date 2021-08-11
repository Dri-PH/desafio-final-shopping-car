import styled from "styled-components";
import BG from "./assets/car.svg";

export const Container = styled.section`
    display:flex;
    flex-direction: column;
`;
export const TitleBox = styled.div`
    height:7vh;
    background: rgb(0,0,0);
    background: linear-gradient(40deg, rgba(0,0,0,1) 0%, rgba(45,45,45,1) 9%, rgba(249,249,249,1) 32%, rgba(45,45,45,1) 81%, rgba(0,0,0,1) 100%);
    display:flex;
    align-itens:center;
    justify-content:center;
    h1{
        font-size:2rem;
    }
`;
export const RowInterface = styled.div`
    display:flex;
    height:93vh;
    flex-direction:row;
    background:#eee;
`;
export const CarHub = styled.div`
    width:70%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`;
export const CarCard = styled.div`
    background: #f9f9f9;
    border-bottom:solid 2px rgba(195,195,195,1);
    border-radius:5px 30px;
    box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.2);
    width:14rem;
    height:10rem;
    margin:5px;
    div{
        display:flex;
        align-itens:center;
        justify-content:center;
        margin:1rem;
    }
    ul{
        width:100%;
        list-style-type: none;
    }
`;
export const AddBar = styled.span`
    display:flex;
    height:2rem;
    justify-content: space-between;
    border-bottom:solid 1px rgba(195,195,195,1);
    border-radius:5px 30px 0px 0px;
    background:rgba(190,200,210,1);
    h2 {
        margin-left:0.25rem;
        font-size:1.25rem;
    }
    button{
        border-radius:100%;
        width:1.75rem;
        heigth:1.75rem;
        color:#eee;
        background:#000;
        border:solid 1px rgba(190,200,210,1);
        font-size:1.25rem;
        margin-right:0.75rem;
    }

`;
export const CartShop = styled.div`
    width:30%;
    height:90%;
    background:rgba(240,240,240,1);
    border:solid 2px rgba(195,195,195,1);
    background: url(${BG});
    background-position: center;
    background-size:70%;
    background-repeat:no-repeat;
    overflow-y: scrow:
    div{
        overflow-y: scrow:
        width:100%;
        height:100%;
    }
`;