import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
import Show from './pages/Show';


import { auth } from './services/firebase';

import './App.css';

function App() {
  
  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const [ notes, setNotes ] = useState([]);

  const fetchData = useRef(null);
  console.log(fetchData)

  const CONTACTS_DISPLAY_URL = "http://localhost:3001/contacts"

  const CONTACTS_CREATE_URL = "http://localhost:3001/contacts"



  //contacts helper functions
  const getContacts = async () => {
    if(!user) return;

    const token = await user.getIdToken();
    console.log(token)
    const response = await fetch(CONTACTS_DISPLAY_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    const contacts = await response.json();
    setContacts(contacts);
  }
  
  const createContact = async person => {
    if(!user) return;
    const token = await user.getIdToken();
     const data = { ...person, managedBy: user.uid
    }
    await fetch(CONTACTS_CREATE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getContacts(); // to refresh the list of contacts
  }

  const createNote = async (note, id) => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = { ...note, createdBy: user.uid };
    await fetch(`${CONTACTS_DISPLAY_URL}/${id}/notes`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getContacts();
  }

  useEffect(() => {
    fetchData.current = getContacts;
  });


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      if(user) {
        fetchData.current();
      } else {
        setContacts([]);
      }
      
    });
    
    // TODO: only get contacts after a user has signed in
    return () => unsubscribe(); // clean up action - remove observer from memory when not needed
  }, [user]);
 

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
       <Route path="/product">
          <Product />
        </Route>
        <Route path="/solutions">
          <Solutions />
        </Route>
        <Route path="/about">
          <About />
        </Route>
       <Route path="/contacts" render={() => (
         user ? (
         <Contacts 
         contacts={contacts}
         createContact={createContact} 
         /> 
         ) : <Redirect to="/login" />
       )} />
        <Route path="/dashboard" render={() => (
         user ? <Dashboard /> : <Redirect to="/login" />
       )} />
     </Switch>
     <Footer />

      </>
  );
}

export default App;