
import React, { useState, useEffect } from 'react';
import Home from './Home'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { gridVisibleSortedRowIdsSelector } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Rank',sortable: false, width: 80 },{
    field: 'productcode',
    headerName: 'image',
    width: 150,
    editable: true,
    renderCell: (params) => <img src={`/public/images/${params.row.productcode}.png`} />, // renderCell will render the component
  },
  { field: 'name', headerName: 'name',sortable: false, width: 300 },
  
  {
    field: 'brand',
    headerName: 'brand',
    width: 150,
    sortable: false,
    editable: true,
  },
  {
    field: 'gender',
    headerName: 'gender',
    type: 'number',
    sortable: false,
    width: 100,
    editable: true,
  },
  {
    field: 'season',
    headerName: 'season',
    type: 'number',
    sortable: false,
    width: 110,
    editable: true,
  },
  {
    field: 'likes',
    headerName: 'likes',
    type: 'number',
    sortable: false,
    width: 110,
    editable: true,
  },
  {
    field: 'sales',
    headerName: 'sales',
    sortable: true,
    width: 110,
  },
  {
    field: 'ratings',
    headerName: 'ratings',
    type: 'number',
    sortable: false,
    width: 110,
    editable: true,
  },
  {
    field: 'reviews',
    headerName: 'reviews',
    type: 'number',
    sortable: false,
    width: 110,
    editable: true,
  },
  {
    field: 'Tags',
    headerName: 'Tags',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

function setid(r) {

}


function App() {
  const [rows, setRows] = useState([]);
  useEffect( () => {
    fetch('/data')
    .then(res => {
        return res.json();
    })
    .then( (data) => {
        setRows(data)
    }) 


}, [])
  return (
    <div className="App">
      <Home />
      <Box sx={{ height: '80vh', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowHeight = {150}
          pageSize={100}
          autoPageSize = {true}
          disableColumnMenu = {true}
          disableColumnFilter = {true}
          disableColumnSelector = {true}
          disableDensitySelector = {true}
          rowsPerPageOptions={[5]}
          initialState={{
            sorting: {
              sortModel: [{ field: "likes", sort: "desc" }],
            },
          }}
          // checkboxSelection
          // disableSelectionOnClick
          // experimentalFeatures={{ newEditingApi: true }}
          />
      </Box>
    </div>
  );
}

export default App;
