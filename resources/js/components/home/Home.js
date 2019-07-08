import React, {Fragment} from 'react';

import Introduction from './parts/Introduction';
import Examples from './parts/examples/Examples';
import SubscribeContainer from '../../containers/home/subscribe/SubscribeContainer';
import MissionContainer from './../../containers/home/mission/MissionContainer';
import About from './parts/About'

const Home = () => (
	<Fragment>
		<Introduction/>
		<Examples/>
		<SubscribeContainer/>
		<About/>
		<MissionContainer/>
	</Fragment>
);

export default Home;