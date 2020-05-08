import React from 'react'
import styled from './styled'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import User from './user/pages/User'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UpdatePlace from './places/pages/UpdatePlace'
import Auth from './user/pages/Auth'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Route path="/auth">
            <Auth />
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
