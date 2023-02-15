import './App.css';
import NavBar from './components/NavBar';
import SearchForm from './pages/SearchForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelDescription from './pages/HotelDescription';
import HotelList from './pages/HotelList';

function App() {
  return (
    <div>
      <NavBar />
      <SearchForm/>
      <BrowserRouter>
      <Routes>
        {/* <Route element={<SearchForm/>} path = '/' ></Route> */}
        <Route element={<HotelList/>} path = '/hotels' ></Route>
        <Route element={<HotelDescription/>} path = '/hotel' ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
