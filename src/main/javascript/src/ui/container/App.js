import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div id="application">
                <h4>APP</h4>
                {this.props.children}
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