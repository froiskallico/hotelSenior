import React from 'react';

// import { Container } from './styles';

const GuestsTable = ({ guests }) => {
return (
  <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Documento</th>
                <th>Valor gasto (R$)</th>
              </tr>
            </thead>

            <tbody>
              {guests.map(guest => (
                <tr key={guest._id}>
                  <td>{guest.nome}</td>
                  <td>{guest.documento}</td>
                  <td>{guest.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
)};

export default GuestsTable;
