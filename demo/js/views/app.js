/*global Backbone:true, $:true, _:true, App:true */
/*jshint multistr:true */
/*jshint browser:true */
/*jshint strict:false */

App.Views.App = Backbone.View.extend({
  template: _.template('<header class="nav"></header>\
<div class="main"></div>'),
  initialize : function(opts) {
    var self = this;
    _.bindAll(this, 'render');
    this.router = opts.router;
    this.auth = opts.auth;
    this.controller = opts.controller;
    this.render();
  },
  render: function() {

    _.each(this.views, function(x){
      x.close();
    });

    this.views = {};
    
    $(this.el).html(this.template());

    this.views.nav = new App.Views.Nav({
      el: this.$('.nav'),
      router: this.router,
      auth: this.auth,
      controller: this.controller
    });


    var view = this.controller.get('view');
    console.log(view);
    var el = $('<div />')
      .addClass(view)
      .appendTo(this.$('.main'));
    
    switch (view){
    case 'login':
      this.views.login = new App.Views.Login({
        el: el,
        auth: this.auth,
      });
      return;
      break;


    default:
      this.views.login = new App.Views.Default({
        el: el,
        router: this.router
      });
      break;
    }

    // this.views.tray = new App.Views.Tray({
    //   controller: this.controller,
    //   el: $('<div />')
    //     .appendTo($('.tray'))
    // });

  }
});
