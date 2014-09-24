/*global Backbone:true,  _:true, $:true, App:true */
/*jshint browser:true */
/*jshint strict:false */

$(function(){
  App.start();
});

var App = {
  Models: {},
  Collections: {},
  Views: {},
  controller: null,
  router: null,
  start: function(){
    
    this.auth = new App.Models.Auth({
    });

    this.controller = new App.Models.Controller({
    });

    this.router = new App.Router();
    
    this.views = {
      app: new App.Views.App({
        router: this.router,
        auth: this.auth,
        controller: this.controller,
        el: $('#app')
      })
    };
    
    Backbone.history.start({pushState: false});

    $(document).on("click", "a:not([data-bypass])", function(e) {
      var href = $(this).attr("href");
      var protocol = this.protocol + "//";
      if (href.slice(0, protocol.length) !== protocol) {
        e.preventDefault();
        App.router.navigate(href, true);
      }
    });

  }
};

/*global Backbone:true,  _:true, $:true, App:true */
/*jshint browser:true */
/*jshint strict:false */

App.Router = Backbone.Router.extend ({
  routes: {
    "": "boot",
    "logout": "logout",
    "account": "account",
    "#login": "login",
    "#signup": "signup",
    "*default": "boot"
  },

  logout: function() {
    App.auth.logout();
    App.controller.set({
      view: 'default'
    });
  },

  signup: function() {
    App.controller.set({
      view: 'signup'
    });
  },

  login: function() {
    App.controller.set({
      view: 'login'
    });
  }

});
