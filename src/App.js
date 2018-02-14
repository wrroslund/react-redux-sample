import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './components/Main';

class App extends Component {
    render() {
        const { store, persistor } = this.props;
        return (
            <Provider store={store}>
                <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            {/* <Route path="/app" component={PublicRoutes}/> */}
                            <Redirect to="/"/>
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
