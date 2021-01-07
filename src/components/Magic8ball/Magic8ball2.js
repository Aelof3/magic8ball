import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import './magic8ball2.css';

class Magic8ball2 extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="icosahedron-wraper">
        <div className="icosahedron spin">
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            
            <div className="triangle"></div>
        </div>
      </div>
    );
  }
}

export default Magic8ball2;
