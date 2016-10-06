import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import App from 'component/App';

class AppContainer extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div id="application">
                <App/>
            </div>
        );
    }
}

let mapStateToProps = () => ({}),
    mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);