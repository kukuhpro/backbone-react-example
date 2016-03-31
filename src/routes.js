var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./component/main');
var Topic = require('./component/topic');

module.exports = (
	<Router>
		<Route path="/" component={Main} />
		<Route path="/topics/:id" component={Topic} />
	</Router>
);