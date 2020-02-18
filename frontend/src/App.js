import React, { useState, useEffect } from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import DefaultButton from "./components/DefaultButton";
import Section from "./components/Section";
import TextInput from "./components/TextInput";
import CheckInput from "./components/CheckInput";
import RadioInput from "./components/RadioInput";

import { Previous, Next } from "./components/NavigationButtons";

import "./global.css";

import api from "./services/api";

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    async function loadGuests() {
      const response = await api.get("/guests");

      setGuests(response.data);
    }

    loadGuests();   
  }, []);

  return (
    <div id="app">
      <TopBar />
      
      <main id="main">
        <DefaultButton title="Incluir pessoa" />
        <Section title="Novo Check-in">
          <form>
            <div className="input_group">
              <TextInput name="dataEntrada" label="Data/hora de entrada" />
              <TextInput name="dataSaida" label="Data/hora de saida" />
            </div>

            <div className="input_group">
              <TextInput name="pessoa" label="Pessoa" />
              <CheckInput name="possuiVeiculo" label="Possui Veiculo" />
            </div>
          </form>
          <DefaultButton title="Salvar" />
        </Section>

        <Section title="Consultas">
          <p>Filtrar por:</p>

          <RadioInput
            name="present"
            id="true"
            value="true"
            label="Pessoas ainda presentes"
            checked="checked"
          />

          <RadioInput
            name="present"
            id="false"
            value="false"
            label="Pessoas que já deixaram o hotel"
          />

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Documento</th>
                <th>Valor gasto (R$)</th>
              </tr>
            </thead>

            <tbody>
              {
                guests.map(guest => (
                  <tr>
                    <td>{guest.nome}</td>
                    <td>{guest.documento}</td>
                    <td>{guest.telefone}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>

          <Previous />
          <Next />
        </Section>
      </main>
    </div>
  );
}

export default App;
