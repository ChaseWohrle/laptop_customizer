import React, { Component } from 'react';
import Feature from './Feature';
import FeatureItem from './FeatureItem'

class Features extends Component {
	render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
        	const options = this.props.features[feature].map(item => {
         		return (
         			<FeatureItem item={item} selectedItem={this.props.selected[feature]} feature={feature} featureHash={featureHash} updateFeature={this.props.updateFeature}/>
         		);
         	});
         	return (
         		<Feature feature={feature} featureHash={featureHash} options={options}/>
         	);
        });
		return (
			<div>
				{features}
			</div>
		);
	};
}

export default Features