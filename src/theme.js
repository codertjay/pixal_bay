import React , { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import * as actions from './store/actions/auth';
import NavbarPage from "./components/Navbar";
import Footer from "./components/Footer";


class App extends Component {

    componentDidMount () {
        this.props.onTryAutoSignup ();
    }

    render () {
        return (
            <div className=''>
                <Router>
                    <NavbarPage/>
                    <BaseRouter/>
                </Router>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null ,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch (actions.authCheckState ())
    }
}

export default connect (mapStateToProps , mapDispatchToProps) (App);
