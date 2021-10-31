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
import Show from './pages/Show';


import { auth } from './services/firebase';

import './App.css';

// const ProtectedRoute = ({ user, component }) => {
//   if(props.user){
//     return props.component;
//   } else {
//     return <Redirect to="/login" />
//   }
// };

function App() {
  
  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const fetchData = useRef(null);

  const API_URL = "http://localhost:3001/api/contacts"

  const getContacts = async () => {
    if(!user) return;

  const token = await user.getIdToken();
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer' + token
    }
  });
  const contacts = await response.json();
  setContacts(contacts);
}

const createContact = async person => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = {...person, managedBy: user.uid}
  await fetch(API_URL, {
    method: 'POST', 
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(data)
});
getContacts();
}

const createNote = async (note, id) => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = { ...note, createdBy: user.uid };
  await fetch(`${API_URL}/${id}/notes`, {
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



  //TODO: add heroku api/url

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      if(user) {
        fetchData.current();
      } else {
        setContacts([]);
      }
      
    });
    

  return () => unsubscribe();
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
        )}>
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
        <Route path="/dashboard" render={() => (
          user ? <Dashboard /> : <Redirect to="/login" />
        )}>
        </Route>
        <Route path="/contacts" render={() => (
          user ? (
          <Contacts user={user}
          contacts={contacts} 
          createContact={createContact} 
          /> 
          ) : <Redirect to="/login" />
        )} >
        </Route>
        <Route path="/contacts/:id" render={(props) => (
            user ? (
              <Show 
                contact={contacts.find(c => c._id === props.match.params.id)} 
                createNote={createNote}
              />
            ) : <Redirect to="/login" />
          )} />
        <Route path="/applications">
          <Applications />
        </Route>
        <Route path="/roadmap">
          <Roadmap />
        </Route>
      </Switch>
      <Footer />
      </>
  );
}

export default App;