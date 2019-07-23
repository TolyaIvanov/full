import React, {Fragment, memo} from 'react';

import Introduction from './parts/Introduction';
import Examples from './parts/examples/Examples';
import SubscribeContainer from '../../containers/home/subscribe/SubscribeContainer';
import MissionContainer from './../../containers/home/mission/MissionContainer';
import About from './parts/About'

const Home = memo(() => (
	<Fragment>
		<Introduction/>
		<Examples/>
		<SubscribeContainer/>
		<About/>
		<MissionContainer/>
	</Fragment>
));

export default Home;