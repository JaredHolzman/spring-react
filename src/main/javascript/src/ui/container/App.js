import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export default class App extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div id="application">
                <h1>Hello, World!</h1>
            </div>
        );
    }
}

let mapStateToProps = () => ({}),
    mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);