import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../Pages';
import ShopHeader from '../ShopHeader';


const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route path="/" component={HomePage} exact></Route>
                <Route path="/cart" component={CartPage}></Route>
            </Switch>
        </main>
    );
};


export default App;