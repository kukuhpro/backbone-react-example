var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    parse: function(response) {
        return response.data;
    },
    url: "https://api.imgur.com/3/topics/defaults"
});