import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Search } from './Containers/search/index'
import { Detail } from './Containers/detail/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Search />
        </Route>
        <Route path='/detail/:id' children={<Detail />} />
      </Switch>
    </Router>
  )

}

export default App