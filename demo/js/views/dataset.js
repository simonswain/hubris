/*global Backbone:true, $:true, _:true, App:true */
/*jshint multistr:true */
/*jshint browser:true */
/*jshint strict:false */

App.Views.Dataset = Backbone.View.extend({
  template: _.template(''),
  initialize : function(opts) {
    var self = this;
    _.bindAll(this, 'render');
    this.controller = opts.controller;
    this.render();
  },
  events: {
  },
  render: function() {
    var data = {};
    $(this.el).html(this.template(data));
  }
});
