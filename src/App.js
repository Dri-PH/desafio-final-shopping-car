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
        Tipo: "Sedan",
        id: 9
      }, {
        nome:"Polo",
        Montadora:"Volkswagen",
        Preço: 70000,
        Tipo: "Hatch",
        id: 8
      }, {
        nome:"T-Cross",
        Montadora:"Volkswagen",
        Preço: 123000,
        Tipo: "SUV",
        id: 7
      }, {
        nome:"Tiguan R-line",
        Montadora:"Volkswagen",
        Preço: 146000,
        Tipo: "SUV",
        id: 6
      }, {
        nome:"Civic",
        Montadora:"Honda",
        Preço: 115000,
        Tipo: "Sedan",
        id: 5
      }, {
        nome:"Corola",
        Montadora:"Toyota",
        Preço: 110000,
        Tipo: "Sedan",
        id: 4
      }, {
        nome:"Corola Cross",
        Montadora:"Toyota",
        Preço: 184000,
        Tipo: "SUV",
        id: 3
      }, {
        nome:"Comprass",
        Montadora:"Jeep",
        Preço: 132000,
        Tipo: "SUV",
        id: 2
      }, {
        nome:"Golf GTI",
        Montadora:"Volkswagen",
        Preço: 138000,
        Tipo: "Hatch",
        id: 1
      }
    ],
    listaDeCompras:[]
  };

  add = (x) => {
    this.setState({
      listaDeCompras: this.state.listaDeCompras.concat(x)
    })
   /*event.preventDefault();*/
  }

  /*
    Soma = (x) => {
      return x* 2
    }
    Soma(2)
  */

 /* handleChange = (event) => {
    this.setState({
      carros: event.target.value
    });
  };*/
  remove = (id) => {
    this.setState({
      listaDeCompras: this.state.listaDeCompras.filter((object) => object.id !== id)
    });
  };

  /*totalValue = () => {
    carros.reduce((x, y) => ( x + y.Preço, 0))
  }*/
  render(){
    return(
      <S.Container>
        <GlobalStyles/>
        <S.TitleBox>
          <h1>Loja de Carros!</h1>
        </S.TitleBox>
        <S.RowInterface>
          <S.CarHub>
            {this.state.carros.map((item,index) => (
            <S.Hover key={index}>
              <S.AddBar>
                  <h2>{item.nome}</h2>
                  <button onClick={() => this.add(item)} /*onChange={this.handleChange}*/> + </button>
                </S.AddBar>
              <S.CarCard>
                <div>
                  <ul>
                    <li><b>Montadora:</b> {item.Montadora}</li>
                    <li><b>Preço:</b> R${item.Preço}</li>
                    <li><b>Tipo:</b> {item.Tipo}</li>
                  </ul>
                </div>
              </S.CarCard>
            </S.Hover>
            ))}
          </S.CarHub>
          <S.CartShop>
            {this.state.listaDeCompras.map((item,index) => (
              <S.ShopCard key={index}>
                <S.BoxScrow>
                  <S.RemoveBar>
                    <h2>{item.nome}</h2>
                    <button onClick={() => this.remove(item.id)}> - </button>
                  </S.RemoveBar>
                  <div>
                    <ul>
                      <li><b>Preço:</b> R${item.Preço}</li>
                      <li><b>Tipo:</b> {item.Tipo}</li>
                    </ul>
                  </div>
                </S.BoxScrow>
              </S.ShopCard>
            ))}
          </S.CartShop>
        </S.RowInterface>
        <div>
          <div>
            <p>R$:{}</p>
          </div>
        </div>
      </S.Container>
    )
  }
}
export default App;
