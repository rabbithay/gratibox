import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './contexts/userContext';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Routes from './Routes';

export default function App() {
  const [user, setUser] = useLocalStorage('@user', {});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <GlobalStyle />
        <Theme />
        <Routes />
      </Router>
    </UserContext.Provider>
  );
}
