import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderPortal from './Components/Header/HeaderPortal';
import Content from './Components/Content/Content';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (user) => {
      console.log('handleAuth', user);
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        setIsAuthenticated(false);
      }
      console.log(currentUser)
      console.log(isAuthenticated)
  }

  return (    
    <Router>
      <HeaderPortal 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleAuth={handleAuth}
      />
      <Content currentUser={currentUser} />
    </Router>
  );
}

export default App;
