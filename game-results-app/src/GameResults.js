import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import api from './api';

const instance = axios.create({
  baseURL: 'http://game-results-app-env.eba-suvm3xvy.eu-central-1.elasticbeanstalk.com/api',
});

const GameResults = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'team', headerName: 'Team', width: 150 },
      { field: 'question', headerName: 'Question', width: 150 },
      { field: 'result', headerName: 'Result', width: 150 },
    ];
    // ...
  
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get('/game-results');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };
  
    fetchData();
  }, []);
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        loading={loading}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};

export default GameResults;


