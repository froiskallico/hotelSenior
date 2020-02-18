import React from "react";
import "./App.css";
import { MdArrowBack, MdArrowForward, MdMenu } from "react-icons/md";


import logoSenior from "./assets/logoSenior.svg";
import "./global.css";


function App() {
  return (
    <div id="app">
      <header id="topbar">
        <img id="logoSenior" src={logoSenior} alt="Senior" />
        <MdMenu id="MenuIcon"/>
      </header>

      <main id="main">
        <button className="default">Incluir pessoa</button>

        <div className="section">
          <div className="sectionHeader">
            <h1>Novo Check in</h1>
          </div>

          <div className="sectionBody">
            <form>
              <div className="input_group">
                <div className="input column">
                  <label htmlFor="dataEntrada">Data/hora de entrada</label>
                  <input name="dataEntrada" id="dataEntrada" required />
                </div>

                <div className="input column">
                  <label htmlFor="dataSaida">Data/hora de Saida</label>
                  <input name="dataSaida" id="dataSaida" required />
                </div>
              </div>

              <div className="input_group">
                <div className="input column">
                  <label htmlFor="pessoa">Pessoa</label>
                  <input name="pessoa" id="pessoa" required />
                </div>

                <div className="input row">
                  <input
                    type="checkbox"
                    name="possuiVeiculo"
                    id="possuiVeiculo"
                    value="false"
                  />
                  <label htmlFor="possuiVeiculo">Possui Veiculo</label>
                </div>
              </div>
            </form>
            <button className="default">Salvar</button>
          </div>
        </div>

        <div className="section">
          <div className="sectionHeader">
            <h1>Consultas</h1>
          </div>

          <div className="sectionBody">
            <p>Filtrar por:</p>

            <input type="radio" name="present" id="true" value="true" />
            <label htmlFor="false">Pessoas ainda presentes</label>

            <input type="radio" name="present" id="false" value="false" />
            <label htmlFor="false">Pessoas que já deixaram o hotel</label>

            <table>
              <tr>
                <th>Nome</th>
                <th>Documento</th>
                <th>Valor gasto (R$)</th>
              </tr>

              <tr>
                <td>João da Silva</td>
                <td>123456789</td>
                <td>1939,00</td>
              </tr>

              <tr>
                <td>Maria de Souza</td>
                <td>456789123</td>
                <td>949,00</td>
              </tr>

              <tr>
                <td>Pedro Sauro</td>
                <td>789456123</td>
                <td>650,00</td>
              </tr>
            </table>

            <button className="pageNavigation"><MdArrowBack className="icon"/>Previous</button>
            <button className="pageNavigation">Next<MdArrowForward  className="icon" /></button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
