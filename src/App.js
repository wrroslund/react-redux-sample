import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Matters from './pages/Matters';
import ActiveMatter from './pages/ActiveMatter';
import Layout from './pages/Layout';


class App extends Component {
    render() {
        const { store, persistor } = this.props;
        return (
            <Provider store={store}>
                <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Matters}/>
                                <Route exact path="/matter/:matterid" component={ActiveMatter}/> 
                                {/* <Route path="/app" component={PublicRoutes}/> */}
                                <Redirect to="/"/>
                            </Switch>
                        </Layout>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
