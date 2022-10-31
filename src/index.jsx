import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './pages/App'
import Header from './components/Header/index'
import Error from './components/Error/index'
import Status from './pages/Status/index'
import Login from './components/Login'
import Signup from './components/Signup'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/account'></Route>
        <Route exact path='/user'></Route>
        <Route exact path='/status'>
          <Status />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
