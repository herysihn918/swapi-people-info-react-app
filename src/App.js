import React from 'react'
import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Row, Col } from 'react-bootstrap'

//routers
import PeopleList from './routers/PeopleList'
import PersonDetail from './routers/PersonDetail'
import ErrorRoute from './routers/ErrorRoute'

//self-components
import Header from './common/Header'

function App() {
  return (
    <>
      <Header />
      <Row className="py-3 px-0 container m-auto">
        <Col>
          <Router>
            <Switch>
              <Route path="/" component={PeopleList}  exact />
              <Route path="/detail" component={PersonDetail} exact />
              <Route component={ErrorRoute} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </>
  )
}

export default App;
