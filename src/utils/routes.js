import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Landing from 'pages/Landing';
import Settings from 'pages/Settings';

const routes = {
  root: '/',
  landing: '/my-ui/home',
  about: '/my-ui/about',
  contact: '/my-ui/contact',
  settings: '/my-ui/settings',
};

export default (
  <Switch>
    <Route path={routes.about}>
      <About />
    </Route>
    <Route path={routes.contact}>
      <Contact />
    </Route>
    <Route path={routes.settings}>
      <Settings />
    </Route>
    <Route path={routes.landing}>
      <Landing />
    </Route>
    <Route path={routes.root}>
      <Redirect to={routes.landing} />
    </Route>
  </Switch>
);
