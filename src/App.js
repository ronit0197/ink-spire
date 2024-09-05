import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Style/App.scss'
import SiteNavbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <SiteNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;