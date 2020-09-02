import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './landing.scss';
import { Link } from 'react-router-dom';

class Hero extends Component {
	render() {
		return (
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ScrollAnimation
                animateIn='anim'
                delay={200}
                duration={0.4}
              >
                <h1 className="text-white font-weight-bold">
                  This is the main title.
                  It could have more than one text line.
                </h1>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn='anim'
                delay={400}
                duration={0.4}
              >
                <h2 className="text-white">
                  As you suppose, this is the sub-title.
                </h2>
              </ScrollAnimation>
            </div>
            <div className="col-6 bg-gray-600 rounded p-5">
              <h3 className="text-white p-5">
                This is a placeholder for the main image
              </h3>
            </div>
          </div>
          <div className="row mt-5 mb-4">
            <h5 className="text-white col-12 mb-3">
              Please sign-in or sign up for full-experience
            </h5>
            <Link to="/signin" className="btn btn-lg btn-secondary mr-4 ml-2">
              Sign-in
            </Link>
            <Link to="/signin" className="btn btn-lg btn-light">
              Sign-up for free
            </Link>
          </div>
        </div>
      </div>
		);
	}
}

export default Hero;
