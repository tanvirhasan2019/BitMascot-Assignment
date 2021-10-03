
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route , Redirect } from 'react-router-dom';
import NavbarMenu from './components/NavbarMenu';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
import Admin from './pages/Admin';
function App() {
 

  return (
    <BrowserRouter>
      <div>  
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/registraction" exact component={Register} />
              <ProtectedRoute path="/profile" exact component={UserProfile} />
              <AdminRoute path="/admin" exact component={Admin} />
              
            </Switch>         
      </div> 
    </BrowserRouter>
  );
}

export default App;
//<Route path="/profile" exact component={UserProfile} /> 