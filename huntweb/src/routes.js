import React from 'react';

import { BrownserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product'

const Routes = () => (
    <BrownserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrownserRouter>
)

export default Routes;