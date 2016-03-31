var React = require('react');
var ImagesCollection = require('../collection/images');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
	handleData: function(collection, response, options) {
		this.setState({
			show: true,
			images: collection
		});
	},
	componentWillMount: function() {
	   var Images = new ImagesCollection([], {id: this.props.params.id});
	   Images.fetch({success: this.handleData});
	},
	getInitialState :  function() {
		return {
			show: false, 
			images: []
		};
	},	
	render: function() {
		return <div className="images-content">
			{this.state.show ? this.renderImages() : 'There is no images.'}
		</div>
	},
	renderImages: function() {
		return this.state.images.map(function(image) {
			return <div key={image.get('id')} className="images-list">
				<ImagePreview key={image.get('id')} {...image.toJSON({})} />
			</div>
		});
	}
});