import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Order from './components/OrderPage/OederPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LogIn from './components/LogIn/LogIn';
import ServiceList from './components/ServiceList/ServiceList';
import Review from './components/Review/Review';
import AddAdmin from './components/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState({});
  console.log(loggedInUser);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, admin, setAdmin }}>


<Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/LogIn">
          <LogIn>

          </LogIn>
        </Route>
        <PrivateRoute exact path="/detail/:id">
          <Order></Order>
        </PrivateRoute>

        <PrivateRoute exact path="/ServiceLists">
          <ServiceList></ServiceList>
        </PrivateRoute>
        <PrivateRoute exact path="/addAdmin">
          <AddAdmin></AddAdmin>
        </PrivateRoute>
        <Route exact path="/Review">
          <Review></Review>
        </Route>
       
      </Switch>

    </Router>

    </UserContext.Provider>
    
  );
};

export default App;


