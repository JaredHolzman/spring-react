import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';
import App from 'container/App';
import Hello from 'container/Hello';
import Goodbye from 'container/Goodbye';

export default () => (
    <Route path="/web" name="app" component={App}>
        <IndexRedirect to="/web/goodbye"/>

        <Route path="hello">
            <IndexRoute component={Hello}/>
        </Route>

        <Route path="goodbye">
            <IndexRoute component={Goodbye}/>
        </Route>
    </Route>
);
