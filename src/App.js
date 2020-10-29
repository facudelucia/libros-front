import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Admin from './Admin';
import FormEditBook from './FormEditBook';
import Home from './Home';
import Login from './Login';
import AddBook from "./AddBook"
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/editbook" component={FormEditBook} />
                    <Route exact path="/addbook" component={AddBook} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
