import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Avatar from './Avatar';
import './landing.scss';

class Landing extends Component {
	render() {
		return (
      <div>
        <div className="bg-gradient-primary">
          <Header />
          <Hero />
        </div>
        <Avatar className="mb-5" />
      </div>
		);
	}
}

export default Landing;