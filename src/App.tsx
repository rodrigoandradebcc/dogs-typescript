import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
