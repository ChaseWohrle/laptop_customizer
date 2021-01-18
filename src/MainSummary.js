import React, { Component } from 'react';
import Summary from './Summary'

class MainSummary extends Component {
	render() {
		return(
			<section className="main__summary">
            	<h2>Your cart</h2>
            	<Summary selected={this.props.selected} />
          	</section>
		);
	}
}

export default MainSummary;