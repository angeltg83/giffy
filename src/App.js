import React from "react";
import { Route } from "wouter";
// import logo from './logo.svg';
import "./App.css";
import SearchResult from "./pages/SearchResult";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Header from './components/Header'
import { UserContextProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <div className="App">
          <section className="App-content">
            <Header/>

            <Route component={Home} path="/" />
            <Route component={Login} path="/login" />
            <Route component={SearchResult} path="/gif/:keyword" />
            <Route component={() => <h1>404 Error :)</h1>} path="/404" />

          </section>
        </div>
      </UserContextProvider>
    </>
  );
};

export default App;
