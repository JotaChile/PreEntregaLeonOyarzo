import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer'; 
import NavBar from '../NavBar/NavBar';
import BasesLegales from '../BasesLegales/BasesLegales';
import Cart from '../Cart/Cart';
import { CarritoProvider } from '../../context/CarritoContext';
import Checkout from '../Checkout/Checkout';

export const AppRoutes = () => {

  return (
    <Router>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={'Bienvenido a Aguas JC'}/>} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/categoria/:idCategoria' greetings={'Bienvenido a Aguas JC'} element={<ItemListContainer />} />
          <Route path="/bases-legales/" element={<BasesLegales/>} />
          <Route path="/cart/" element={<Cart/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CarritoProvider>
    </Router>
  );
}


export default AppRoutes;