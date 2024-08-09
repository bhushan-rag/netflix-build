import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // logged out
        dispatch(logout);
      }
    });

    return unsubscribe();
  }, []);
  return (
    <div className="app">
    <HomeScreen /> 
      {/* <Router>
       {!user ? (
         <LoginScreen /> 
        ): (
          <Switch>
          <Route path="/">
             <HomeScreen /> 
          </Route>
        </Switch>
        )}
            
    </Router> */}
    </div>
  );
}

export default App;
