import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Landing from 'pages/Landing';

const routes = {
  landing: '/',
  about: '/about',
  contact: '/contact',
};

export default (
  <Switch>
    <Route path={routes.about}>
      <About />
    </Route>
    <Route path={routes.contact}>
      <Contact />
    </Route>
    <Route path={routes.landing}>
      <Landing />
    </Route>
  </Switch>
);
