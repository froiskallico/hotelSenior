import React from 'react';

// import { Container } from './styles';

const GuestsTable = ({ guests }) => {
return (
  <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Documento</th>
                <th>Telefone</th>
                <th>Valor total gasto (R$)</th>
                <th>Valor gasto ultima conta (R$)</th>
              </tr>
            </thead>

            <tbody>
              {guests.map(guest => (
                <tr key={guest._id}>
                  <td>{guest.nome}</td>
                  <td>{guest.documento}</td>
                  <td>{guest.telefone}</td>
                  <td>{Number(guest.valorTotal).toFixed(2).replace('.', ',')}</td>
                  <td>{Number(guest.valorUltimaConta).toFixed(2).replace('.', ',')}</td>
                </tr>
              ))}
            </tbody>
          </table>
)};

export default GuestsTable;
