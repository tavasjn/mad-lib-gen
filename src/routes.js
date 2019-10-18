import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './components/Landing';
import WordInputs from './components/WordInputs';
import Submit from './components/Submit';
import MadLibOutput from './components/MadLibOutput';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path ='/inputs' component={WordInputs} />
        <Route path='/ready-to-submit' component={Submit} />
        <Route path='/madlib-output' component={MadLibOutput} />
    </Switch>
)