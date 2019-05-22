import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {BASE_PATH, LOAD_PARAM, GALLERY_CHUNK} from './../../constants/constants'

import {fetchGalleryList} from '../../actions/gallery/fetchGalleryList'
import Picture from "../../components/gallery/picture/Picture";

class GalleryList extends React.Component {
	state = {
		hitsPerPage: 0
	};

	componentDidMount() {
		this.props.fetchData(`${BASE_PATH}gallery${LOAD_PARAM}${this.state.hitsPerPage}&${GALLERY_CHUNK}`)
	}

	render() {
		return (
			<Fragment>
				{this.renderPictureList(this.props.galleryData)}
			</Fragment>
		);
	}

	renderPictureList = (images) => {
		return images && images.map(image => (
				<Picture
					key={image.id}
					title={image.name}
					style={image.style}
					imageUrl={image.url}
				/>
			)
		);
	};
}

const mapStateToProps = (state) => ({
	galleryData: state.fetchGalleryList,
});

const mapDispatchToProps = (dispatch) => ({
	fetchData: (url) => dispatch(fetchGalleryList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList);