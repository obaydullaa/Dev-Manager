import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from '../layouts/Header';
import AddContact from '../pages/AddContact';
import ContactDetails from '../pages/ContactDetails';
import Contacts from '../pages/Contacts';
import EditContact from '../pages/EditContact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

function App() {

  return (
    <> 
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />


      <Header/>
      
        <Container style={{width: '800px', margin: '0 auto'}} className='pt-5'> 
          <Routes>
            <Route index element={<Home />} />
            <Route 
            path='/contacts'
            element={
              <Contacts />
            } />
            <Route path='/add-contact' element={<AddContact />} />
            <Route path='/contacts/:id' element={<ContactDetails />} />
            <Route path='/edit-contact/:id' element={<EditContact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login/>} />      
            <Route path='*' element={<NotFound/>} />
            
            
          </Routes>
        </Container>
      
    </>
  )
}

export default App
