import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import './bg.css';

class Background1 extends Component {
    static contextType = UserContext;

    render() {
        return (
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        );
    }
}

export default Background1;
