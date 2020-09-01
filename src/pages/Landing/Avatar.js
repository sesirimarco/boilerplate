import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './landing.scss';

class Avatar extends Component {
	render() {
		return (
      <div className="container pt-5">
        <div className="row mt-4 mb-5">
          <div className="text-center ml-auto mr-auto avatar-container">
            <div className="rounded-circle xy-center h-200 mb-3 bg-gray-300">
              <ScrollAnimation
                animateIn='anim'
                duration="0.5"
              >
                Avatar
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              animateIn='anim'
              delay={100}
              duration={0.5}
            >
              <h4>Lorem Ipsum dolor sit amet</h4>
            </ScrollAnimation>
          </div>
          <div className="text-center ml-auto mr-auto avatar-container">
            <div className="rounded-circle xy-center h-200 mb-3 bg-gray-300">
              <ScrollAnimation
                animateIn='anim'
                duration="0.5"
              >
                Avatar
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              animateIn='anim'
              delay={100}
              duration={0.5}
            >
              <h4>Lorem Ipsum dolor sit amet</h4>
            </ScrollAnimation>
          </div>
          <div className="text-center ml-auto mr-auto avatar-container">
            <div className="rounded-circle xy-center h-200 mb-3 bg-gray-300">
              <ScrollAnimation
                animateIn='anim'
                duration="0.5"
              >
                Avatar
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              animateIn='anim'
              delay={100}
              duration={0.5}
            >
              <h4>Lorem Ipsum dolor sit amet</h4>
            </ScrollAnimation>
          </div>
        </div>
      </div>
		);
	}
}

export default Avatar;
