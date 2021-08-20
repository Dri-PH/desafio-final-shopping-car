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
export const Hover = styled.div`
    background: rgba(190,200,210,1);
    margin:5px;
    height:28.3%;
    width:23.9%;
    border-radius: 5px 30px;
    box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.2);
    &:hover{
        background: linear-gradient(149deg, 
            rgba(23,221,195,1) 0%, 
            rgba(47,208,196,1) 24%, 
            rgba(128,255,255,1) 47%, 
            rgba(248,255,255,1) 69%, 
            rgba(169,255,254,1) 84%, 
            rgba(0,255,248,1) 100%);
        h2{
            color: #f9f9f9;
        }
    }
`;
export const CarCard = styled.div`
    background: #f9f9f9;
    display:flex;
    border-radius:0px 0px 5px 30px;
    width:13.999rem;
    height:8.17rem;
    margin:3px;
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
    height:1.90rem;
    justify-content: space-between;

    border-radius:0px 30px 0px 0px;
    background: none;
    
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
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: linear-gradient(
        rgba(61, 61, 61, 0.2497373949579832) 0%,
        rgba(89, 89, 89, 0.5018382352941176) 50%,
        rgba(61, 61, 61, 0.7511379551820728) 100%
      );
    }
    &::-webkit-scrollbar-thumb {
      -webkit-appearance: none;
      background-color: rgba(213, 206, 206, 0.3211659663865546);
      border: 1px solid rgba(213, 206, 206, 0.411659663865546);
    }
 
`;
export const BoxScrow = styled.div`
    height:30%;
`;
export const ShopCard = styled.div`
  
    background: #f9f9f9;
    border-bottom:solid 2px rgb(0,255,222);
    border-radius:5px 5px 5px 25px;
    border-left:solid 3px rgb(0,255,222);
    box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.2);
    width:95%;
    height:14%;
    margin:5px;
    ul{
        display:flex;
        margin-top:2%;
        justify-content: space-around;
        width:100%;
        list-style-type: none;
    }
`;
export const RemoveBar = styled.div`
    display:flex;
    height:2rem;
    justify-content: space-between;
    border-bottom:solid 1px rgba(195,195,195,1);
    background: rgb(0,255,222);
    background: linear-gradient(149deg, 
        rgba(23,221,195,1) 0%, 
        rgba(47,208,196,1) 24%, 
        rgba(128,255,255,1) 47%, 
        rgba(248,255,255,1) 69%, 
        rgba(169,255,254,1) 84%, 
        rgba(0,255,248,1) 100%);
    h2{
        color: #f9f9f9;
        margin-left:0.25rem;
        font-size:1.25rem;
    }
    button{
        border-radius:100%;
        width:1.75rem;
        heigth:1.75rem;
        color:rgb(0,255,222);
        background: #f9f9f9;
        border:solid 3px rgba(169,255,254,019);
        font-size:1.25rem;
        margin-right:0.75rem;
    }
`;