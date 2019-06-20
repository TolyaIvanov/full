import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import {fetchExamplesList} from "../../actions/examples/fetchExamples";

import {
	BASE_PATH,
} from "../../constants/defaultConstants";

import ExampleColumn from "../../components/home/parts/examples/ExampleColumn";

class ExampleColumnContainer extends React.Component {
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
		let columns = [];

		columns = data[0] ? [].concat(
			[data[0].filter(col => col.style === 'Make art')],
			[data[0].filter(col => col.style === 'Style transfer')],
			[data[0].filter(col => col.style === 'Deep dream')]
		) : [];

		return columns.map(col => (
			<ExampleColumn
				key={col[0].id}
				style={col[0].style}
				firstUri={col[0].uri}
				secondUri={col[1].uri}
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

export default connect(mapStateToProps, mapDispatchToProps)(ExampleColumnContainer);