import React from 'react';

import ReactDom from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Photos from './components/Photos';
import Search from './components/Search';
import Animations from './components/Animations';
import SinglePhoto from './components/SinglePhoto';
import Welcome from './components/Welcome'

import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path="/photos" component={Photos}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/animations" component={Animations}></Route>
      </Route>
    </Router>
  </Provider>
  
)

ReactDom.render(router,document.getElementById('root'));