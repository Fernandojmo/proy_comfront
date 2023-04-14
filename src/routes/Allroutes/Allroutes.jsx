import { Routes , Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Contactanos from '../../pages/Contactanos/Contactanos';
import Inicio from '../../pages/Inicio/Inicio';
import Menu from '../../pages/Menu/Menu';
import Nosotros from '../../pages/Nosotros/Nosotros';
import Reservas from '../../pages/Reservas/Reservas';
import Cartadisp from '../../pages/Menu/Cartadisp';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Profile from '../../pages/Profile/Profile';
import Product from '../../pages/Product/Product';

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Layout/>}>
            <Route path='/' element = {<Inicio/>}/>
            <Route path='/menu' element = {<Menu/>}/>
            <Route path='/reservas' element = {<Reservas/>}/>
            <Route path='/nosotros' element = {<Nosotros/>}/>
            <Route path='/contactanos' element = {<Contactanos/>}/>
            <Route path='/cartadisp' element = {<Cartadisp/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='/profile' element = {<Profile/>}/>
            <Route path='/product/:id' element = {<Product/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
    </Routes>
  )
}

export default Allroutes