import React, { Component } from 'react';
import '../resources/css/Button.scss';

export default class Button extends Component {
    render() {
        return (
            <div className="button">
                <button>{this.props.buttonText}</button>
            </div>
        )
    }
}
