/*global Backbone:true,  _:true, $:true, App:true */
/*jshint browser:true */
/*jshint strict:false */

App.Models.Auth = Backbone.Model.extend({
  defaults: {
    token: null,
  },
  initialize: function() {
    _.bindAll(this, 'hasAuth', 'recall', 'getToken', 'setToken','delToken', 'login','logout');
    this.recall();
  },
  hasAuth: function(){
    return(!!this.get('token'));
  },
  getToken: function(){
    return localStorage.getItem('auth-bearer-token');
  },
  setToken: function(token){
    localStorage.setItem('auth-bearer-token', token);
  },
  delToken: function(){
    localStorage.removeItem('auth-bearer-token');
  },
  recall: function(){
    var token = this.getToken();
    if(token){
      this.set({token: token});
      this.trigger('auth');
    }
  },
  login: function(creds) {
    this.setToken('fake-token');
    this.set({token: 'fake-token'});
    this.trigger('auth');
    // var self = this;
    // $.ajax({
    //   type: 'POST',
    //   url: '/api/auth/login',
    //   data: {
    //     username: creds.username, 
    //     password: creds.password
    //   }
    // }).done(function(data) {
    //   self.setToken(data.token);
    //   self.set({token: data.token});
    //   self.trigger('auth');
    // }).fail(function(user){
    // });
  },
  logout: function(){
    this.delToken();
    this.clear().set(self.defaults); 
    this.trigger('deauth');
    // var self = this;
    // $.ajax({
    //   type: 'POST',
    //   url: '/api/auth/logout',
    //   headers: {
    //   'Authorization': 'Bearer ' + this.get('token')
    //   }
    // }).done(function() {
    //   self.delToken();
    //   self.clear().set(self.defaults); 
    //   self.trigger('deauth');
    // }).fail(function(data){
    // });
  }
});
