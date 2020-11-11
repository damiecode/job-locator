import React from 'react';
import '../assets/css/App.css';
import Header from './header';
import Footer from './footer';
import Search from './search';

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Footer />
  </div>
);

export default App;
