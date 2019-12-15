import React, {Component} from 'react'
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

//routers
import PeopleList from './routers/PeopleList'
import PersonDetail from './routers/PersonDetail'
import ErrorRoute from './routers/ErrorRoute'

class App extends Component {
  
  render(){
    return (
      <>
        
            <Router>
              <Switch>
                <Route path="/" component={() => <Redirect to="/list/" />} exact />
                <Route path="/list/" component={() => <PeopleList />} exact />
                <Route path="/detail" component={PersonDetail} exact />
                <Route component={ErrorRoute} />
              </Switch>
            </Router>
         
      </>
    )
  }
}
export default App;
