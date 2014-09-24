/*global Backbone:true, $:true, _:true, App:true */
/*jshint multistr:true */
/*jshint browser:true */
/*jshint strict:false */

App.Views.Login = Backbone.View.extend({
  template: _.template('<form>\
<input style="display:none" type="text" name="fakeusernameremembered"/>\
<input style="display:none" type="password" name="fakepasswordremembered"/>\
<div>\
<input type="text" name="username" placeholder="username" value="demo" />\
</div>\
<div>\
<input type="password" name="password"  placeholder="password" value="demo" />\
</div>\
<div>\
<button type="submit">Login</button>\
</div>\
</form>'),
  initialize : function(opts) {
    _.bindAll(this, 'render','submit');
    this.auth = opts.auth;
    this.render();
  },
  events: {
    'submit form': 'submit'
  },
  submit: function(e){
    e.preventDefault();
    var creds = {
      username: this.$('[name=username]').val(),
      password: this.$('[name=password]').val()
    }
    if(creds.username === ''){
      this.$('[name=username]').focus();
      return;
    }
    if(creds.password === ''){
      this.$('[name=password]').focus();
      return;
    }
    this.auth.login(creds);
  },
  render : function() {
    this.$el.html(this.template());
  }
});
