import React, {Fragment} from 'react';

import Introduction from './parts/Introduction';
import Examples from './parts/examples/Examples';
import SubscribeContainer from './../../containers/subscribe/SubscribeContainer';

const Home = () => (
	<Fragment>
		<Introduction/>
		<Examples/>
		<SubscribeContainer/>
	</Fragment>
);

export default Home;