import { useState } from 'react';
import Header from './components/Header.jsx';
import Article from './components/Article.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="grid grid-rows-[auto,1fr,auto]  h-screen">
      <Header/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default App
