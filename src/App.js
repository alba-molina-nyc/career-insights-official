import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import React from "react";


import Header from './components/Header';
import Footer from './components/Footer';
import Chart from './components/Chart';




import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Product from './pages/Product';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ApplicationDashboard from './pages/ApplicationDashboard';
import ContactDashboard from './pages/ContactDashboard';
import ShowContact from './pages/ShowContact';
import ShowApplication from './pages/ShowApplication';





import { auth } from './services/firebase';
import './App.css';


function App() {
  
  const [ user, setUser ] = useState(null);
  const [ contacts, setContacts ] = useState([]);
  const [ applications, setApplications ] = useState([]);
  const [ chart, setChart ] = useState([]);
  const [  contactedChart, setcontactedChart ] = useState([]);
  const fetchData = useRef(null);
  let token;


  // ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    URL  ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️

  const CONTACTS_API_URL = 'http://localhost:3001/api/contacts'; 

  const APPLICATIONS_API_URL = 'http://localhost:3001/api/applications'; 

// ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    CONTACTS GET CONTACT FUNCTION    ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️ 
  const getContacts = async () => {
    if(!user) return;
    
    // get a secure id token from our firebase user
    const token = await user.getIdToken();
    const response = await fetch(CONTACTS_API_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const contacts = await response.json();
    setContacts(contacts);
  }

//  ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    CONTACTS CREATE CONTACT FUNCTION   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️
  const createContact = async person => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...person, managedBy: user.uid} // attach logged in user's uid to the data we send to the server
    await fetch(CONTACTS_API_URL, {
      method: 'POST', 
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getContacts(); // we can now refresh our list of contacts
  } 

  //  ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    CONTACTS UPDATE CONTACT FUNCTION   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️

  const updateContact = async person => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...person, managedBy: user.uid} // attach logged in user's uid to the data we send to the server
    await fetch(CONTACTS_API_URL, {
      method: 'PUT', 
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getContacts(); // we can now refresh our list of contacts
  };

// ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    CONTACTS DELETE CONTACT FUNCTION    ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️ 
const deleteContact = async person => {
  if(!user) return;
  const token = await user.getIdToken();
  const data = {...person, managedBy: user.uid} 
  await fetch(CONTACTS_API_URL, {
    method: 'DELETE',
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    }
});
getContacts();
};

// ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    CONTACTS CREATE NOTE FUNCTION   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️ 
  const createNote = async (note, id) => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = { ...note, createdBy: user.uid };
    await fetch(`${CONTACTS_API_URL}/${id}/notes`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getContacts();
  }
//  ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    CONTACTS GET APP FUNCTION    ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️
    const getApplications = async () => {
      if(!user) return;
      
      const token = await user.getIdToken();
      const response = await fetch(APPLICATIONS_API_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      const applications = await response.json();
      setApplications(applications);
    }
  // ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️     CREATE APP FUNCTION   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️
    const createApplication = async app => {
      console.log(app);
      if(!user) return;
      const token = await user.getIdToken();
      console.log(token)
      const dataApp = {...app, managedBy: user.uid, todos:[]} 
      await fetch(APPLICATIONS_API_URL, {
        method: 'POST', 
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(dataApp)
      });
      getApplications();
    } 
// ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️    APP CREATE TODO FUNCTION   ✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️ 
    const createTodo = async (toDo, id) => {
      if(!user) return;
      const token = await user.getIdToken();
      const dataApp = { ...toDo, createdBy: user.uid };
      await fetch(`${APPLICATIONS_API_URL}/${id}/todo`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(dataApp)
      });
      getApplications();
    }

  
    const getChart = async () => {
      if(!user) return;
      
      // get a secure id token from our firebase user
      const token = await user.getIdToken();
      const response = await fetch(CONTACTS_API_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      const chart = await response.json();
      setChart(chart);
    }
  

  // create a reference to our createContact function that persists between renders
  // this will help mitigate memory leaks
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
    

  return () => unsubscribe(); // clean up action - remove observer from memory when not needed
}, [user]);

return (
  < div className="App">
    <Header 
    user={user}
    token={token} />

      <Switch>
        <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/solutions">
        <Solutions />
      </Route>
      <Route exact path="/product">
        <Product />
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
        <Route path="/login" render={() => (
          user ? <Redirect to="/dashboard" /> : <Login />
        )} />
        <Route path="/dashboard" render={() => (
          user ? (
            <Dashboard
            contacts={contacts}
            createContacts={createContact}
            applications={applications}
            createApplication={createApplication}
            />
          ) : <Redirect to="/login" />
        )} />
  <Route path="/search" >
    </Route>
        <Route path="/chart" render={() => (
          user ? (
         <Chart
         chart={chart}
            contacts={contacts}
           
            applications={applications}
          
            />
          ) : <Redirect to="/login" />
        )} />
      
          <Route exact path="/contacts" render={(props) => (
          user ? (
            <ContactDashboard 
              contacts={contacts} 
              createContact={createContact} 
              getContacts={getContacts}
            />
          ) : <Redirect to="/login" />
        )} />
        <Route path="/contacts/:id" render={(props) => (
          user ? (
            <ShowContact 
              contact={contacts.find(c => c._id === props.match.params.id)} 
              createNote={createNote}
              deleteContact={deleteContact(c => c._id === props.match.params.id)}
            />
          ) : <Redirect to="/login" />
        )} />
   <Route exact path="/applications" render={(props) => (
          user ? (
            <ApplicationDashboard 
            applications={applications} 
            createApplication={createApplication}
            getApplications={getApplications}
            />
          ) : <Redirect to="/login" />
        )} />
         <Route exact path="/applications/:id" render={(props) => (
          user ? (
            <ShowApplication 
            application={applications.find(a => a._id === props.match.params.id)} 
              createTodo={createTodo}
          />
        ) : <Redirect to="/login" />
      )} />
       

      </Switch>
    <Footer />
  </div>
);
}

export default App;
