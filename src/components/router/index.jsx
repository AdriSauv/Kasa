import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/home";
import Apartment from "../../pages/apartment";
import About from '../../pages/about';
import Header from '../header';
import Footer from '../footer';

function Router() {
  return (
      <div className='page'>
          <Header />
      </div>

  );
};

export default Router