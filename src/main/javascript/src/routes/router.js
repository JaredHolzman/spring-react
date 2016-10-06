import React from 'react';
import {Route} from 'react-router';
import AppContainer from 'container/App';

export default (onLogout) => (
    <Route path="/web" name="app" component={AppContainer}>

    </Route>
);
