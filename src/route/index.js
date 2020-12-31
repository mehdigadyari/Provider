import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from '../component/dashboard/SignIn'
import CrowlerList from '../component/crowlerList'
import CompleteInfo from '../component/completeInfo'

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/list">
          <CrowlerList />
        </Route>
        <Route exact path="/listEdit">
          <CompleteInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
