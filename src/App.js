import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Show from './pages/Show';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Product from './pages/Product';

import { auth } from './services/firebase';

import './App.css';


function App() {
  
  const [ user, setUser ] = useState(null);

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
  return () => unsubscribe();
  }, []);


 

  return (
    <>
      <Header user={user} />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/solutions">
          <Solutions />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts/:id">
          <Show />
        </Route>
        <Route path="/applications/:id">
          <Show />
        </Route>
        <Footer />
      </Switch>
      </>
  );
}

export default App;