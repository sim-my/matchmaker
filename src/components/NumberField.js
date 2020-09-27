import React, { Component } from 'react';
import '../resources/css/NumberField.scss';

export default class NumberField extends Component {
    render() {
        return (
            <div className="numberField">
                <input className="numberField__input" type="number" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}
