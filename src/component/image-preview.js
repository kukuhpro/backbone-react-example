var React = require('react');

module.exports = React.createClass({
	renderImage: function() {
		return <img src={ 'http://i.imgur.com/' + this.props.id + 'h.jpg' } className="img-responsive" />
	},
	renderVideo: function() {
		return <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
				<source src={this.props.mp4} type="video/mp4"></source>	
		</video>

	},
	render: function() {
		return <div>
			{this.props.animated ? this.renderVideo() : this.renderImage()}
		</div>
	}
});