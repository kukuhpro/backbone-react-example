var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Masonry = require('masonry-layout');


var TopicCollection = require('../collection/topics');
var Topics = new TopicCollection();

module.exports = React.createClass({
    handleData: function(collection, response, options) {
        this.setState({
            show: true,
            topics: collection
        });
    },
    getInitialState: function() {
        return {
            show: false,
            topics: []
        };
    },
    componentWillMount: function() {
        Topics.fetch({ success: this.handleData });
    },
    componentDidUpdate: function() {
    	if (this.state.show == true) {
	    	var msnry = new Masonry( '.topic--content', {
				itemSelector: '.topic-list',
				percentPosition: true		
			});
    	}
    },	
    randClassHeight: function() {
        var rand = Math.floor((Math.random() * 3) + 0);
        var array = ['small','medium', 'large'];
        return "col-xs-4 topic-list small";
    },
    render: function() {
        return <div>
            <h1 className="page-heading">Topics</h1>
            <div className = "col-xs-12 topic--content"> 
            	{ this.state.show ? this.renderTopics() : 'There is No Topics.' } 
            </div>
        </div>
    },
    renderTopics: function() {
        return this.state.topics.map(function(topic) {
            if (topic.get('topPost') != null && topic.get('topPost') != undefined) {
                return <Link to={"topics/" + topic.get('id')}  className = {this.randClassHeight()}
                key = { topic.get('id') } > 
                	<img src={ 'http://i.imgur.com/' + topic.get('topPost').id + 'h.jpg' } className="picture img-responsive"/>
                	<div className="overlay">
                	</div>
                	<div className="text">{ topic.get('name') } </div>
                </Link>
            }
        }.bind(this));
    }
});