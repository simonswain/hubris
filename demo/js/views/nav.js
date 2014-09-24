/*global Backbone:true, $:true, _:true, App:true */
/*jshint multistr:true */
/*jshint browser:true */
/*jshint strict:false */

App.Views.Nav = Backbone.View.extend({
  empty: _.template('<a href="#login" class="action-login">Login</a> - <a href="#signup" class="action-signup">Signup</a>'),
  template: _.template('<div class="session"><a href="#logout" class="action-logout">Logout</a></div>'),
  initialize : function(opts) {
    _.bindAll(this, 'render','signup','login','logout');
    this.router = opts.router;
    this.auth = opts.auth;
    this.user = opts.user;
    this.render();
  },
  // events: {
  //   'click a.action-signup': 'signup',
  //   'click a.action-login': 'login',
  //   'click a.action-logout': 'logout'
  // },
  signup: function(e){
    e.preventDefault();
    e.stopPropagation();
    this.router.navigate('signup',{trigger:true});
  },
  login: function(e){
    e.preventDefault();
    e.stopPropagation();
    this.router.navigate('login',{trigger:true});
  },
  logout: function(e){
    e.preventDefault();
    e.stopPropagation();
    this.auth.logout();
  },
  render : function() {
    if(!this.auth.hasAuth()){
      this.$el.html(this.empty());
      return;
    }
    var data = {};
    this.$el.html(this.template(data));
  }
});
