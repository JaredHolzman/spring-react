import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';
import App from 'container/App';
import Hello from 'container/Hello';
import Goodbye from 'container/Goodbye';

export default () => (
    <Route path="/" name="app" component={App}>
        <IndexRedirect to="/hello"/>

        <Route path="hello">
            <IndexRoute component={Hello}/>
        </Route>

        <Route path="goodbye">
            <IndexRoute component={Goodbye}/>
        </Route>
    </Route>
);
