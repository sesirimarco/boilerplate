import React, { Component } from 'react';
import './landing.scss';

class Avatar extends Component {
	render() {
		return (
      <div className="container pt-5">
        <div className="row mt-4 mb-5">
          <div className="text-center ml-auto mr-auto avatar-container">
            <div className="rounded-circle avatar h-100 mb-3 bg-gray-300">
              Avatar
            </div>
            <h4>Lorem Ipsum dolor sit amet</h4>
          </div>
          <div className="text-center ml-auto mr-auto avatar-container">
            <div className="rounded-circle p-5 avatar h-100 mb-3 bg-gray-300">
              Avatar
            </div>
            <h4>Lorem Ipsum dolor sit amet</h4>
          </div>
          <div className="text-center ml-auto mr-auto avatar-container">
            <div className="rounded-circle p-5 avatar h-100 mb-3 bg-gray-300">
              Avatar
            </div>
            <h4>Lorem Ipsum dolor sit amet</h4>
          </div>
        </div>
      </div>
		);
	}
}

export default Avatar;
