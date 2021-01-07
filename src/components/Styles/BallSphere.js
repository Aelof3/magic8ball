import React, { Component } from 'react';
import './ballsphere.css';

class BallSphere2 extends Component {
    render() {
        return (
            <div className="ballWrap">
                {this.props.children}
                <div className="ballWrap-overlay shadow"></div>
            </div>
        )
    }
}

export default BallSphere2;