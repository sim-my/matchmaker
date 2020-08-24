import React, { Component } from 'react';

export default class ImageUpload extends Component {
	state={
		image:'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.bavarealtors.in%2Ftestimonial%2Fdummy-man-570x570%2F&psig=AOvVaw1CdTDWFnMZVG2-gDHV4X08&ust=1598267058210000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC8hv6WsesCFQAAAAAdAAAAABAD'
	}
	render() {
		const { profile__image } = this.state.image;
		return (
			<div className="imageUpload">
				<div className="imageUpload__imageContainer">
					<img src={profile__image} alt=""/>
				</div>
			</div>
		)
	}
}
