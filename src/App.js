import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import PurposePage from './pages/PurposePage'
import ProductPage from './pages/ProductPage'
import PartnersPage from './pages/PartnersPage'
import TeamSupport from './pages/TeamSupport'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/purpose" component={PurposePage} />
        <Route exact path="/product" component={ProductPage} />
        <Route exact path="/partners" component={PartnersPage} />
        <Route exact path="/team_support" component={TeamSupport} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
