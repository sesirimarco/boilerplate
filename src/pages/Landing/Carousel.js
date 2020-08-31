import React, { Component } from 'react';
import './landing.scss';

class Carousel extends Component {
	render() {
		return (
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block bg-gray-300">a</div>
          </div>
          <div className="carousel-item">
            <div className="d-block bg-gray-300">b</div>
          </div>
          <div className="carousel-item">
            <div className="d-block bg-gray-300">c</div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
		);
	}
}

export default Carousel;
