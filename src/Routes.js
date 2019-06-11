import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

class Routes extends Component {
    render(){
        return (
        <Switch>
            <Route 
                exact
                path="/dogs" 
                render={() => <DogList dogs={this.props.dogs} />} 
            />
            <Route
                exact
                path="/dogs/:name"
                render={(routerProps) => <DogDetails {...routerProps} dogs={this.props.dogs} />}
            />
            <Redirect to="/dogs" />
      </Switch>
        );
    }
}

export default Routes;