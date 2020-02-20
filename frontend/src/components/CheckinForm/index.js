import React, { useState } from "react";

import "./styles.css";

import DefaultButton from "../DefaultButton";
import InputMask from 'react-input-mask';

import api from "../../services/api";

const CheckinForm = ({ data }) => {
  const [dataEntrada, setDataEntrada] = useState();
  const [dataSaida, setDataSaida] = useState();
  const [nomePessoa, setNomePessoa] = useState();
  const [adicionalVeiculo, setAdicionalVeiculo] = useState(false);

  async function handleSubmit() {   
    const guestResponse = await api.get('/guests', { params: {nome: nomePessoa} } )

    const hospede = guestResponse.data[0]

    let data = {
      hospede,
      dataEntrada: new Date(dataEntrada),
      dataSaida: new Date(dataSaida),
      adicionalVeiculo
    };

    try {
      const response = await api.post("/bills", data);

      if (response) {
        window.alert("Check-in criado com sucesso")
      } else {
        window.Error("Erro ao fazer Checkin")
      }
    } catch (err) {
      window.alert(err);
    }
  }

  return (
    <>
      <form>
        <div className="input_group">
          <div className="input textInput">
            <label htmlFor="dataEntrada">Data/hora de entrada</label>
            <InputMask
              name="dataEntrada"
              id="dataEntrada"
              value={dataEntrada}
              mask="99/99/9999 99:99:00"
              onChange={e => setDataEntrada(e.target.value)}
              required
              />
          </div>

          <div className="input textInput">
            <label htmlFor="dataSaida">Data/hora de saída</label>
            <InputMask
              name="dataSaida"
              id="dataSaida"
              value={dataSaida}
              mask="99/99/9999 99:99:00"
              onChange={e => setDataSaida(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input_group">
          <div className="input textInput">
            <label htmlFor="nomePessoa">Pessoa</label>
            <input
              name="nomePessoa"
              id="nomePessoa"
              value={nomePessoa}
              onChange={e => setNomePessoa(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <input
              type="checkbox"
              name="adicionalVeiculo"
              id="adicionalVeiculo"
              value={adicionalVeiculo}
              onChange={e => setAdicionalVeiculo(!adicionalVeiculo)}
            />
            <label htmlFor="adicionalVeiculo">Possui Veiculo</label>
          </div>
        </div>
      </form>
      <DefaultButton title="Salvar" onClick={handleSubmit} />
    </>
  );
};

export default CheckinForm;
