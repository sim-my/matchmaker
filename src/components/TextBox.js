import React, { Component } from 'react';
import '../resources/css/TextBox.scss';

export default class TextBox extends Component {
    render() {
        return (
            <div className="textBox">
                <input className="textBox__input" type="text" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}
