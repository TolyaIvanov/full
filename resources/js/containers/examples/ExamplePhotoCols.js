import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {fetchExamplesList} from "../../actions/examples/fetchExamples";

import {
	BASE_PATH,
} from "../../constants/constants";

import ExampleColumn from "../../components/home/parts/ExampleColumn";

class ExamplePhotoCols extends React.Component {
	componentDidMount() {
		this.props.fetchData(`${BASE_PATH}examples`)
	}

	render() {
		return (
			<Fragment>
				{this.renderStyleCols(this.props.examplesData)}
			</Fragment>
		)
	}

	renderStyleCols = data => {
		return data && data.map(col => (
			<ExampleColumn
				title={col.title}
				firstUri={col.firstUri}
				secondUri={col.secondUri}
			/>
		))
	}
}

const mapStateToProps = (state) => ({
	examplesData: state.fetchExamples,
});

const mapDispatchToProps = (dispatch) => ({
	fetchData: (url) => dispatch(fetchExamplesList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePhotoCols);