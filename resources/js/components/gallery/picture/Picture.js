import React from 'react'

class Picture extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imageStatus: "loading"
		};
	}

	handleImageLoaded = () => {
		this.setState({imageStatus: "loaded"});
	};

	handleImageErrored = () => {
		this.setState({imageStatus: "failed to load"});
	};

	render() {
		return (
			<div className={'picture-row'}>
				<div className={'picture-text'}>
					<p className={'picture-title'}>{this.props.title}</p>
					<p className={'picture-style'}>{this.props.style}</p>
				</div>
				<div className={'image-wrapper'}>
					{/*<img*/}
					{/*	className={'image'}*/}
					{/*	src={this.props.imageUrl}*/}
					{/*	onLoad={this.handleImageLoaded}*/}
					{/*	onError={this.handleImageErrored}*/}
					{/*/>*/}
					<div>
						{this.props.imageURL}
						<br/>
					</div>
				</div>
			</div>
		);
	}
}

export default Picture;