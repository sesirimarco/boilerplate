import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from '../pages/Landing';
import Signin from '../pages/Signin';
import PrivateContent from '../pages/PrivateContent';
import { isLogged} from '../redux/actions';

class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Landing} />
          {this.props.user ? 
            (
              <Route path='/profile' component={PrivateContent} />
            ) : 
            (
              <Route path='/signin' component={Signin} />
            )
          }
        </Switch>
      </main>
    ); 
  };
};
export default connect(
  ({auth:{user}}) => ({user}),
  {isLogged}
)(Main);