import React from 'react';
import './App.css';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import iconlist from './images/icon-list.svg';
import mobiledesign from './images/illustration-sign-up-mobile.svg';
import { Image } from 'react-bootstrap';
import { Home} from './component/home';
import {  Success} from './component/success';

import {
 HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  

  return (
    <Router>
           <div className="App">
              
           <Routes>
                 <Route  path='/' element={< Home />}></Route>
                <Route  path='/message' element={< Success />}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
