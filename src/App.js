import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Parallax from './components/Parallax';
import MacbookImage from './components/MacbookImage';
import Gifts from './components/Gifts';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import CartContainer from './containers/CartContainer';
import NotifierContainer from './containers/NotifierContainer';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Menu/>
        <Header/>
        <Parallax/>
        <ProductsContainer/>
        <MacbookImage/>
        <Gifts/>
        <Footer/>
        <ProductDetailContainer/>
        <CartContainer/>
        <NotifierContainer/>
      </div>
    );
  }
}

export default App;
