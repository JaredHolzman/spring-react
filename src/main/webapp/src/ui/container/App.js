import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStub} from 'actions/stub';
import FetchDataComponent from 'component/FetchDataComponent';
import TopNav from 'component/TopNav';
// import 'style/css/boostrap.css';

export class App extends Component {

    render() {

        return (
            <div id="application">
                {/*<link rel='stylesheet' href='style/css/bootstrap.css' />*/}
                <TopNav/>
                {this.props.children}
                <FetchDataComponent
                    fetchData={() => this.props.fetchStub()}
                    data={this.props.data}/>
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
