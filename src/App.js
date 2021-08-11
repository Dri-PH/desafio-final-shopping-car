import React, { Component } from "react";
import * as S from "./styledApp.js"
import GlobalStyles from "./GlobalStyles.js"
class App extends Component{
  state = {
    carros:[
      {
        nome:"Jetta",
        Montadora:"Volkswagen",
        Preço: 144000,
        Tipo: "Sedan"
      }, {
        nome:"Polo",
        Montadora:"Volkswagen",
        Preço: 70000,
        Tipo: "Hatch"
      }, {
        nome:"T-Cross",
        Montadora:"Volkswagen",
        Preço: 123000,
        Tipo: "SUV"
      }, {
        nome:"Tiguan R-line",
        Montadora:"Volkswagen",
        Preço: 146000,
        Tipo: "SUV"
      }, {
        nome:"Civic",
        Montadora:"Honda",
        Preço: 115000,
        Tipo: "Sedan"
      }, {
        nome:"Corola",
        Montadora:"Toyota",
        Preço: 110000,
        Tipo: "Sedan"
      }, {
        nome:"Corola",
        Montadora:"Toyota",
        Preço: 110000,
        Tipo: "SUV"
      }, {
        nom:"Comprass",
        Montadora:"Jeep",
        Preço: 132000,
        Tipo: "SUV"
      }, {
        nome:"Golf GTI",
        Montadora:"Volkswagen",
        Preço: 138000,
        Tipo: "Hatch"
      }
    ],
    listaDeCompras:[]
  };
  render(){
    return(
      <S.Container>
        <GlobalStyles/>
        <S.TitleBox>
          <h1>Loja de Carros!</h1>
        </S.TitleBox>
        <S.RowInterface>
          <S.CarHub>
            {this.state.carros.map((item) => (
            <S.CarCard>
              <S.AddBar>
                <h2>{item.nome}</h2>
                <button> + </button>
              </S.AddBar>
              <div>
                <ul>
                  <li><b>Montadora:</b> {item.Montadora}</li>
                  <li><b>Preço:</b> R${item.Preço}</li>
                  <li><b>Tipo:</b> {item.Tipo}</li>
                </ul>
              </div>
            </S.CarCard>
            ))}
          </S.CarHub>
          <S.CartShop>
            map2
          </S.CartShop>
        </S.RowInterface>
      </S.Container>
    )
  }
}
export default App;
