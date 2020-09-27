import React from 'react';
import './style.css';

const Records = () => (
  <table className="records-tables" cellPadding="0" cellSpacing="0">
    <thead>
      <tr>
        <th>INSTANTE</th>
        <th>NOME</th>
        <th>IDADE</th>
        <th>PLATAFORMA</th>
        <th>GÊNERO</th>
        <th>TÍTULO DO GAME</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>20/08/2020 13:45</td>
        <td>20</td>
        <td>XBox</td>
        <td>Ação-Aventura</td>
        <td>God Of War</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
);

export default Records;
