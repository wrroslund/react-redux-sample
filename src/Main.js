import React, { Component } from 'react';
import logo from '../logo.svg';
import {Grid,Row} from 'react-bootstrap';
import MatterList from './MatterList';


class Main extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                

            </div>
            
        );
    }
}

export default Main;