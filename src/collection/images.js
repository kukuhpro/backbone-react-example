var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
Backbone.$.ajaxSetup({
    headers: { 'Authorization': 'Client-ID 5bc9e248c9740d8' }
});

var Image = require('../model/image');

module.exports = Backbone.Collection.extend({
    model: Image,
    initialize: function(models, options) {
        this.id = options.id;
    },
    parse: function(response) {
        return response.data;
    },
    url: function() {
        return 'https://api.imgur.com/3/topics/' + this.id
    }
});
