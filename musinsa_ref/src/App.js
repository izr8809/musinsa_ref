
import React, { useState, useEffect } from 'react';
import Home from './Home'
import Box from '@mui/material/Box';
import { DataGrid  } from '@mui/x-data-grid';
import { gridVisibleSortedRowIdsSelector } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Rank',sortable: false, width: 80 },{
    field: 'productcode',
    headerName: 'image',
    width: 150,
    editable: true,
    sortable: false,
    renderCell: (params) => <a href= {`https://www.musinsa.com/app/goods/${params.row.productcode}` } target="_blank"><img src={`/public/images/${params.row.productcode}.png`} /></a>, // renderCell will render the component
  },
  { field: 'name', headerName: 'name / brand',sortable: false, width: 300 },
  
  {
    field: 'brand',
    headerName: 'brand',
    width: 150,
    sortable: false,
  },
  {
    field: 'gender',
    headerName: 'gender',
    type: 'number',
    sortable: false,
    width: 100,
  },
  {
    field: 'view',
    headerName: 'view',
    type: 'number',
    sortable: false,
    width: 110,
  },
  {
    field: 'season',
    headerName: 'season',
    type: 'number',
    sortable: false,
    width: 110,
  },
  {
    field: 'likes',
    headerName: 'likes',
    type: 'number',
    sortable: false,
    width: 110,
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
  },
  {
    field: 'reviews',
    headerName: 'reviews',
    type: 'number',
    sortable: false,
    width: 110,
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


function App() {
  const [rows, setRows] = useState([]);
  const [address, setAdress] = useState([""]);
  useEffect( () => {
    fetch(`/data${address}`)
    .then(res => {
        return res.json();
    })
    .then( (data) => {
        setRows(data)
    }) 
}, [])
useEffect( () => {
  fetch(`/data${address}`)
  .then(res => {
      return res.json();
  })
  .then( (data) => {
      setRows(data)
  }) 
}, [address])

function changeRank(){
  // if(type === "sales")
    setAdress("/sales");

    // case "sales":
    //   break;
    // case "views":
    //   setAdress("/views");
    //   break;
    // case "reviews":
    //   setAdress("/reviews");
    //   break;
    // case "likes":
    //   setAdress("/likes");
    //   break;
    // default:
    //   break;

}


  return (
    <div className="App">
      <Home />
      <button onClick={() => setAdress("/sales")}> 판매순</button>
      <button onClick={() => setAdress("/views")}> 조회순</button>
      <button onClick={() => setAdress("/likes")}> 좋아요순</button>
      <button onClick={() => setAdress("/reviews")}> 리뷰개수순</button>
      <button onClick={() => setAdress("/likes_ratio_sorted")}> 좋아요 / 브랜드 좋아요 순</button>
      <button onClick={() => setAdress("/reviews_ratio_sorted")}> 리뷰 / 브랜드 좋아요 순</button>
      <button onClick={() => setAdress("/sales_ratio_sorted")}> 판매 / 브랜드 좋아요 순</button>
      <button onClick={() => setAdress("/views_ratio_sorted")}> 조회 / 브랜드 좋아요 순</button>
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
          // initialState={{
          //   sorting: {
          //     sortModel: [{ field: "view", sort: "desc" }],
          //   },
          // }}
          // checkboxSelection
          // disableSelectionOnClick
          // experimentalFeatures={{ newEditingApi: true }}
          />
      </Box>
    </div>
  );
}

export default App;
