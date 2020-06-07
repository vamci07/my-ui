import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from 'pages/About';
import { Email, Phone } from 'pages/Contact';
import Landing from 'pages/Landing';
import Settings from 'pages/Settings';

export const links = {
  landing: '/',
  about: '/about',
  contact: '/contact',
  email: '/contact/email',
  phone: '/contact/phone',
  settings: '/settings',
};

export const routes = (
  <Switch>
    <Route path={links.about}>
      <About />
    </Route>
    <Route path={links.email}>
      <Email />
    </Route>
    <Route path={links.phone}>
      <Phone />
    </Route>
    <Route path={links.settings}>
      <Settings />
    </Route>
    <Route path={links.landing}>
      <Landing />
    </Route>
  </Switch>
);
