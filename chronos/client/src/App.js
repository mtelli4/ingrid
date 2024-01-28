import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Button from './components/Button';
import React, {useEffect,useState} from 'react';
import PageExemple from './pages/pageExemple';
import ClassSquare from './components/ClassSquare';
import Calendar from './components/Calendar';
import axios from 'axios';
import CreateCourse from './pages/createCourse';
import Agenda from './pages/agenda';
import PageEdt from './pages/pageEdt';
import Header from './components/Header';
import FileImport from './pages/fileImport';
import Notes from './pages/notes';

import LoginForm from './pages/loginForm';
import ChangePasswordForm from './pages/changePasswordForm';
import CallForm from './pages/call';

function App() {

  const [listCours, setListCours] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/cours").then((response) => {
      setListCours(response.data)
    })
  }, []) 

  return (
    <Router>
      {/* <Link to="/createcourse"> Créer un cours</Link>
      <Link to="/"> Accueil</Link> */}
      <Header links={[{title:"Calendrier", to:"/"}, {title: "notes", to:"/note"}]} />
      <Routes>
        {/* <Route path="/" element={<Calendar />} exact /> */}
        {/* <Route path="/" element={<ClassSquare height={300} />} exact /> */}
        <Route path="/ade" element={<Agenda listCours={listCours}/>} exact />
        <Route path="/createcourse" element={<CreateCourse />} exact />
        {/* test branch nidal */}
        <Route path="/" element={<PageEdt />} exact /> 
        <Route path="/importStudents" element={<FileImport />} exact />


        <Route path="/login" element={<LoginForm />} exact />
        <Route path="/psw" element={<ChangePasswordForm />} exact />
        <Route path="/call" element={<CallForm />} exact />


        {/* <Route path="/" element={<ClassSquare height={300} />} exact /> */}


        {/* test branch notes lucas */}
        <Route path="/notes" element={<Notes />} exact />
      </Routes>
    </Router>
  );
}

export default App;
