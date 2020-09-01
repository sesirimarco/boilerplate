import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import PrivateContent from './pages/PrivateContent';
import PrivateContentTwo from './pages/PrivateContentTwo';
import Footer from './components/Footer';
import { isLogged} from './actions';
import Landing from './pages/Landing/Landing';
import Signin from './pages/Signin';
import './main.scss';

class Routes extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.isLogged();
  };
  render() {
    return(
      <main>
        <Switch>
          {this.props.user ? 
            (
              <>
                <Header />
                <Route exact path='/profile' component={PrivateContentTwo} />
                <Route exact path='/' component={PrivateContent} />
                <Footer />
              </>
            ) : 
            (
              <>
                <Route exact path='/' component={Landing} />
                <Route path='/signin' component={Signin} />
              </>
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
)(Routes);