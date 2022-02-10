import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import { Provider } from "react-redux"
import App from './app/App';
import { UsersList } from './presentational/user/UsersList';
import { NavBar } from './presentational/navbar/navbar';
import {store} from '../src/app/store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/js/dist/base-component'
import { RegistrationPage } from './presentational/registration/RegistrationPage';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route path='users' element={<UsersList />} />
        <Route path='register' element={<RegistrationPage />}/>
         
        

        
      </Route>
    </Routes>
    <App />
  </React.StrictMode></BrowserRouter></Provider>,
  document.getElementById('root')
);


