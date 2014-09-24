/*global Backbone:true, $:true, _:true, App:true */
/*jshint multistr:true */
/*jshint browser:true */
/*jshint strict:false */

App.Views.Default = Backbone.View.extend({
  template: _.template('<h1>Default</h1>'),
  initialize : function(opts) {
    _.bindAll(this, 'render');
    this.render();
  },
  render : function() {
    this.$el.html(this.template());
  }
});
