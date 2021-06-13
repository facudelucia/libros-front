import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import BookScreen from './BookScreen';
import Header from './Header'
import Footer from './Footer'
import BookSearching from './BookSearching';
import BookList from './BookList';
function App() {
    return (
        <>
            <Header />
            <div className="home">
                <Switch>
                    <Route exact path="/home" component={BookList} />
                    <Route exact path="/book/:id" component={BookScreen} />
                    <Route exact path="/search/:busqueda" component={BookSearching} />
                    <Redirect to="/home" />
                </Switch>
            </div>
            <Footer />
        </>
    )
}

export default App
