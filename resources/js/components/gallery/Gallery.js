import React, {memo} from 'react'
import GalleryList from '../../containers/gallery/GalleryListContainer'

const Gallery = memo((props) => (
	<section className={'gallery'}>
		gallery
		<GalleryList/>
	</section>
));


export default Gallery;