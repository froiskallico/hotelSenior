/* eslint-disable no-alert */

import React, { useState } from "react";
import moment from "moment";

import "./styles.css";

import InputMask from "react-input-mask";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import DefaultButton from "../DefaultButton";

import api from "../../services/api";

const CheckinForm = () => {
  const [dataEntrada, setDataEntrada] = useState();
  const [dataSaida, setDataSaida] = useState();
  const [nomePessoa, setNomePessoa] = useState();
  const [adicionalVeiculo, setAdicionalVeiculo] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const guestResponse = await api.get("/guests", {
      params: { nome: nomePessoa }
    });

    const hospede = guestResponse.data;

    const data = {
      hospede,
      dataEntrada: moment(dataEntrada, "DD/MM/YYYY HH:mm:ss"),
      dataSaida: moment(dataSaida, "DD/MM/YYYY HH:mm:ss"),
      adicionalVeiculo
    };

    try {
      const response = await api.post("/bills", data);

      if (response) {
        window.alert("Check-in criado com sucesso");
      } else {
        window.alert("Erro ao fazer Checkin");
      }
    } catch (err) {
      window.alert("Erro ao processar solicitação: " + err);
    }

    setLoading(false);
  }

  return (
    <>
      <form>
        <Backdrop className="backdrop" open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>

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
              onChange={() => setAdicionalVeiculo(!adicionalVeiculo)}
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
