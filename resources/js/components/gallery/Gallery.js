import React from 'react'
import GalleryList from './../../containers/gallery/GalleryList'

class Gallery extends React.Component {
	render() {
		return (
			<section className={'gallery'}>
				gallery
				<GalleryList/>
			</section>
		);
	}
}

export default Gallery;