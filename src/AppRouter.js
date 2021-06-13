import React from 'react'
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom'
import App from './App'
const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
