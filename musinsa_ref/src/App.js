
import Home from './Home'
import { DataGrid } from '@mui/x-data-grid';
import { Hidden } from '@mui/material';

const columns = [
  { field: 'id', headerName: '순위', width: 70 },
  {
    field: 'image',
    headerName: '이미지',
    renderCell: (params) => 
    <img src = {`${process.env.PUBLIC_URL}/images/${params.row.Productcode}.png`} /> ,
    width: 150,
    
  },
  { field: 'Productcode', headerName: 'Productcode', width: 130,hide: true },
  { field: 'Name', headerName: '상품이름', width: 130 },
  { field: 'Brand', headerName: '브랜드', width: 130 },
  {
    field: 'views',
    headerName: '조회수',
    type: 'number',
    width: 90,
  },
  {
    field: 'category',
    headerName: '카테고리',
    width: 150,
  },
  {
    field: 'sales',
    headerName: '판매수(1개월)',
    type: 'number',
    width: 130,
  },
  {
    field: 'season',
    headerName: '시즌',
    type: 'number',
    width: 90,
  },
  {
    field: 'likes',
    headerName: '좋아요',
    type: 'number',
    width: 90,
  },
  {
    field: 'rating',
    headerName: '평점',
    type: 'number',
    width: 90,
  },
  {
    field: 'reviews',
    headerName: '후기',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: '태그',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, Brand: 'Snow', Productcode: '25868', Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 2, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 3, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 4, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 5, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 6, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 7, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 8, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 9, Brand: 'Snow', Productcode: '25868', Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 10, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 11, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 12, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 13, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 14, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 15, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 16, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 17, Brand: 'Snow', Productcode: '25868', Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 18, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 19, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 20, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 21, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 22, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 23, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 124, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 125, Brand: 'Snow', Productcode: '25868', Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 261, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 127, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 128, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 129, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 130, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 131, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 },
  { id: 132, Brand: 'Snow', Productcode: '25868',Name: 'Jon', views: 35,category: "긴소매 티셔츠",sales: 35,season: 35,likes: 35,rating: 35,reviews: 35 }
];




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <div style={{ height: '90vh', width: '100%' }}>
          <DataGrid
            rows={rows}
            rowHeight={180}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
            
            // checkboxSelection
          />
        </div>
      </header>
    </div>
  );
}

export default App;
