import React, { Component } from 'react'
import Header from './layout/Header/Header'
import { BrowserRouter, Route } from 'react-router-dom'
import Demo from './views/Demo'
import Home from './views/Home'
import Performances from './views/Performances/PerformancesView'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/performances" component={Performances} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
