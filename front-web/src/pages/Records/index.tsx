import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';

import './style.css';
import Pagination from './Pagination';

const BASE_URL = 'http://localhost:8080';

const Records = () => {
  const [ recordsResponse, setRecordsResponse ] = useState<RecordsResponse>();
  const [ acitvePage, setActivePage ] = useState(0);
  const handlePageChange = (index : number) => {
    setActivePage(index);
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/records?linesPerPage=12&page=3`)
    .then(response => setRecordsResponse(response.data));
  }, []);

  return (
  <div className="page-container">
    <table className="records-table" cellPadding="0" cellSpacing="0">
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
      { recordsResponse?.content.map(record => (
        <tr key={record.id}>
          <td>{formatDate(record.moment)}</td>
          <td>{record.name}</td>
          <td>{record.age}</td>
          <td className="text-secondary">{record.gamePlatform}</td>
          <td>{record.genreName}</td>
          <td className="text-primary">{record.gameTitle}</td>
        </tr>
      ))}
      </tbody>
    </table>
    <Pagination
      activePage = {acitvePage}
      goToPage = {handlePageChange}
      totalPages = {recordsResponse?.totalPages}
    />
  </div>
)};

export default Records;
