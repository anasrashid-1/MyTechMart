import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<ProductsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
