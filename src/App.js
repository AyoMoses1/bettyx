import React, { createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Agents from './pages/agents';
import Customers from './pages/customers';
import Dashboard from './pages/dashboard';
import Games from './pages/games';
import Messages from './pages/messages';
import Rules from './pages/rules';
import Settings from './pages/settings';
import Statistics from './pages/statistics';
import SignIn from './pages/auth';
import Layout from './common/Layout';
import './App.css';

export const CurrentPageContext = createContext();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'games':
        return <Games />;
      case 'messages':
        return <Messages />;
      case 'rules':
        return <Rules />;
      case 'statistics':
        return <Statistics />;
      case 'agents':
        return <Agents />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
        <Layout setCurrentPage={setCurrentPage}>{renderPage()}</Layout>
      </CurrentPageContext.Provider>
    </ChakraProvider>
  );
};

export default App;
