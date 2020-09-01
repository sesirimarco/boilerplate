import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Avatar from './Avatar';
import Carousel from './Carousel';
import './landing.scss';

class Landing extends Component {
	render() {
		return (
      <div>
        <div className="bg-gradient-primary">
          <Header />
          <Hero />
        </div>
        <div className="avatar-section">
          <Avatar />
        </div>
        <div className="mb-3">
          <Carousel />
        </div>
      </div>
		);
	}
}

export default Landing;