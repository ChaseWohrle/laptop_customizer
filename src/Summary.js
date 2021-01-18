import React, { Component } from 'react';
import SummaryItem from './SummaryItem';
import SummaryTotal from './SummaryTotal';

class Summary extends Component {
	render(){
		const summary = Object.keys(this.props.selected).map((feature, idx) => {
      		const featureHash = feature + '-' + idx;
      		const selectedOption = this.props.selected[feature];
      		return (
      			<SummaryItem feature={feature} featureHash={featureHash} selectedOption={selectedOption}/>
      		);
		});

		return (
			<>
				{summary}
				<SummaryTotal selected={this.props.selected}/>
			</>

		);
	}
}

export default Summary;