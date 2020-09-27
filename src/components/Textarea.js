import React, { Component } from 'react'
import '../resources/css/Textarea.scss';

export default class Textarea extends Component {
    render() {
        return (
            <div className="textarea">
                <textarea placeholder={this.props.placeholder} rows="4" cols="50"></textarea>
            </div>
        )
    }
}
