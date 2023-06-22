import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer'; 
import NavBar from '../NavBar/NavBar';
import BasesLegales from '../BasesLegales/BasesLegales';

export const AppRoutes = () => {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={'Bienvenido a Aguas JC'}/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer greetings={'Pack y promociones'}/>} />
        <Route path="/bases-legales/" element={<BasesLegales/>} />
      </Routes>
    </Router>
  );
}


export default AppRoutes;