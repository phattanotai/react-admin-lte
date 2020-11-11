import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Admin from '../pages/Admin'
import Setting from '../pages/Setting'


export default () => (
  <Switch>
    <Route exact path="/Admin" component={Admin} />
    <Route exact path="/Setting" component={Setting} />
  </Switch>
)