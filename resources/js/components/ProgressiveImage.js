import React, {Component} from 'react';

class ProgressiveImage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: this.props.image,
			loading: true,
		}
	}

	componentDidMount() {
		this.fetchImage(this.props.image)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.image !== this.props.image) {
			this.setState({
				currentImage: nextProps.preview,
				loading: true
			}, () => {
				this.fetchImage(nextProps.image)
			})
		}
	}

	componentWillUnmount() {
		if (this.loadingImage) {
			this.loadingImage.onload = null
		}
	}

	fetchImage = src => {
		const image = new Image();
		image.onload = () => this.setState({
			currentImage: this.loadingImage.src,
			loading: false
		});
		image.src = src;
		this.loadingImage = image
	};

	render() {
		const {alt} = this.props;

		return (
			<div className={'progressive-image-wrapper'}>
				<div
					className={this.state.loading ? 'preview-wrapper' : 'preview-wrapper hidden'}

				>
					<img
						src={this.props.preview} alt={alt}
						className={'preview'}
					/>
				</div>
				<img
					className={this.state.loading ? 'image' : 'image visible'}
					src={this.state.currentImage}
					alt={alt}
					onLoad={() => {
						this.setState({
							loading: false
						})
					}}
				/>
			</div>
		);
	}
}

export default ProgressiveImage;