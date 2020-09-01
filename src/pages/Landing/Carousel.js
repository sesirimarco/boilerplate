import React, { Component } from 'react';
import './landing.scss';

class Carousel extends Component {
  state = {
    items: [
      {text: 'A', css: 'bg-secondary'},
      {text: 'B', css: 'bg-info'},
      {text: 'C', css: 'bg-danger'}
    ],
    itemActive: 0
  };
  nextItem() {
    const itemActive = this.state.itemActive;
    this.setState({
      itemActive: (itemActive + 1) % this.state.items.length
    });
  }
  prevItem() {
    const itemActive = this.state.itemActive;
    this.setState({
      itemActive: itemActive > 0
        ? itemActive - 1
        : this.state.items.length - 1
    });
  }
	render() {
		return (
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {this.state.items.map((item, index) => {
            return <div className={
                'carousel-item text-center' +
                (index === this.state.itemActive
                  ? ' active'
                  : ''
                )
              }
              key={index}
            >
              <h1 className={
                'container carousel-item-content xy-center bg-gray-300 ml-auto mr-auto' +
                ' ' + item.css
              }>
                {item.text}
              </h1>
            </div>
          })}
        </div>
        <div className="carousel-control-prev cursor-pointer" onClick={() => this.prevItem()}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </div>
        <div className="carousel-control-next cursor-pointer" onClick={() => this.nextItem()}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </div>
      </div>
		);
	}
}

export default Carousel;
