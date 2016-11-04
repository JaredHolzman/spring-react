import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStub} from 'actions/stub';
import FetchDataComponent from 'component/FetchDataComponent';
import TopNav from 'component/TopNav';
import {browserHistory} from 'react-router';

export class App extends Component {


    /**
     * Callback function to execute on success of fetchStub call.
     * Prints "Success!" to the console and redirects to the 'hello'
     * page.
     */
    onSuccess = () => {
        console.log("Success!");
        browserHistory.push("/hello");
    };

    render() {
        return (
            <div id="application">
                <TopNav/>
                {this.props.children}
                <FetchDataComponent
                    fetchData={(paramValue, onSuccess) =>
                        this.props.fetchStub(paramValue, () => onSuccess())}
                    data={this.props.data}
                    onSuccess={() => this.onSuccess()}/>
            </div>
        );
    }
}

const maStateToProps = (state) => {
    return {
        data: state.stub
    };
};
const mapDispatchToProps = {fetchStub};

export default connect((state) => maStateToProps(state), mapDispatchToProps)(App);
