import React from 'react'
import styled from './styled'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import User from './user/pages/User'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/MainNavigation'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Main>
    </Router>
  )
}

const Main = styled.main`
  margin-top: 5rem;
`

export default App
