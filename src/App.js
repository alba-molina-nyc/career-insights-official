import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Roadmap from './pages/Roadmap';
import Applications from './pages/Applications';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Product from './pages/Product';
// import Show from './pages/Show';


import { auth } from './services/firebase';

import './App.css';

function App() {
  
  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const CONTACTS_DISPLAY_URL = "http://localhost:3001/contacts"

  const CONTACTS_CREATE_URL = "http://localhost:3001/contacts/new"



  //contacts helper functions
  const getContacts = async() => {
    const response = await fetch(CONTACTS_DISPLAY_URL, {
      method: 'GET',
    });
    const contacts = await response.json();
    setContacts(contacts);
  }
  
  const createContact = async person => {
    await fetch(CONTACTS_CREATE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(person)
    });
    getContacts(); // to refresh the list of contacts
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    getContacts();
    return () => unsubscribe();
  }, []);

  return (
    <>
     <Header user={user} />
     <Nav user={user}/>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/login" render={() => (
         user ? <Redirect to="/dashboard" /> : <Login />
       )} />
       <Route path="/dashboard" render={() => (
         user ? <Dashboard /> : <Redirect to="/login" />
       )} />
       <Route path="/contacts" render={() => (
         user ? (
         <Contacts 
         contacts={contacts}
         createContact={createContact} 
         /> 
         ) : <Redirect to="/login" />
       )} />
     </Switch>
     <Footer />

      </>
  );
}

export default App;