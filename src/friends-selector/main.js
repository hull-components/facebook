Hull.component({
  templates: ['main'],
  require: ['https://connect.facebook.net/en_US/all.js'],

  datasources: {
    friends: function() {
      if (this.loggedIn()) {
        return this.api({ provider: 'facebook', path: 'me/friends' }, { fields: 'id,name,picture' });
      }
    }
  },

  events: {
    'submit form': function(e) {
      e.preventDefault();
      var data = this.sandbox.dom.getFormData(this.$(e.target));
      var self = this, _ = this.sandbox.util._;
      var params = { message: data.message }
      if (data.friends && data.friends.length > 0) {
        params.to = data.friends.join(',');
      }
      if (this.options.redirectUri) {
        params.redirect_uri = this.options.redirectUri;
      }

      if (this.options.title) {
        params.title = this.options.title;
      }

      self.api({ provider: 'facebook', path: 'ui.apprequests' }, params).then(function(response) {
        console.warn("YEAH : ", response)
      });
    }
  },

  beforeRender: function(data) {
    
  }
});