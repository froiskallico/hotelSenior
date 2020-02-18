import React from 'react';
import './App.css';

import logoSenior from './assets/logoSenior.svg';
import './global.css';

function App() {
  return (
    <div id="app">
      <header id="topbar">
        <img id="logoSenior" src={logoSenior} alt="Senior" />
      </header>

      <main id="main">
        <button className="default">
          Incluir pessoa
        </button>

        <div className="section">
          <div className="sectionHeader">
            <h1>Novo Check in</h1>
          </div>

          <div className="sectionBody">
            <form className="input_group">
              <div className="input_block">
                <label htmlFor="dataEntrada">Data/hora de entrada</label>
                <input 
                  name="dataEntrada"
                  id="dataEntrada"
                  required />
              </div>

              <div className="input_block">
                <label htmlFor="dataSaida">Data/hora de Saida</label>
                <input 
                  name="dataSaida"
                  id="dataSaida"
                  required />
              </div>
              
              <div className="input_block">
                <label htmlFor="pessoa">Pessoa</label>
                <input 
                  name="pessoa"
                  id="pessoa"
                  required />
              </div>

              <div>
                <input 
                  type="checkbox"
                  name="possuiVeiculo"
                  id="possuiVeiculo"
                  />
                <label htmlFor="possuiVeiculo">Possui veiculo</label>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
