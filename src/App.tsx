import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import './App.css';


const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
