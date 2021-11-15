import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import React from "react";


import Header from './components/Header';
import Footer from './components/Footer';
import Chart from './components/Chart';
import ChartApp from './components/ChartApp';




import Home from './pages/Home';
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
  const [ chartApp, setChartApp ] = useState([]);
  const fetchData = useRef(null);
  let token;


  //LIVE URLS
  // const CONTACTS_API_URL = 'https://keen-tereshkova-cbd71b.netlify.app/contacts';
  // const APPLICATIONS_API_URL = 'https://keen-tereshkova-cbd71b.netlify.app/applications';
  
  //CONSTRUCTION URLS
  const CONTACTS_API_URL ='http://localhost:3001/api/contacts'; 
  const APPLICATIONS_API_URL ='http://localhost:3001/api/applications'; 

//FUNCTIONS

//CONTACTS
//GET CONTACTS FUNCTION
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

//CREATE CONTACT FUNCTION
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

// CONTACT.... CREATE NOTE FUNCTION
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

  //APPLICATIONS
// GET APPLICATIONS FUNCTIONS
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

    //CREATE APP
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
    //APP CREATE TO DO 
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

// GET CHART FOR CONTACTS FUNCTION
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

     // GET CHART FOR APPLICATIONS FUNCTION
    const getChartApp = async () => {
      if(!user) return;
  
      const token = await user.getIdToken();
      const response = await fetch(APPLICATIONS_API_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      let res = await response.json();
      setChartApp(res);
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
    <div>
  <Header 
    user={user}
    token={token} />

     <Routes>

     <Route path='/' element={<Home />}/>

     <Route path='/login' element={<Login />}/>
     
     <Route path='/dashboard' element={<Dashboard 
      contacts={contacts}
      createContacts={createContact}
      applications={applications}
      createApplication={createApplication}
      />}/>

     <Route path='/applications' element={<ApplicationDashboard 
      applications={applications} 
      createApplication={createApplication}
      getApplications={getApplications}
      />}/>

     <Route path='/applications/:id' element={<ShowApplication
     createTodo={createTodo}  />}/>

     <Route path='/chart/applications' element={<ChartApp
     chartApp={chartApp}
     getChartApp={getChartApp}
      />}/>

     <Route path='/contacts' element={<ContactDashboard 
      contacts={contacts} 
      createContact={createContact} 
      getContacts={getContacts}
      />}/>

      <Route path='/contacts/:id'  element={<ShowContact
        contact={contacts.find(c => c._id === props.match.params.id)} 
        createNote={createNote} />}/>

      <Route path='/chart/contacts' element={<Chart 
      chart={chart}
      getChart={getChart}
      contacts={contacts}
      applications={applications}
       />}/>
    

     </Routes>
     <Footer />
    </div>
  );
}

export default App;
