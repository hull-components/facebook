Hull.component({
  templates: ['main'],
  refreshEvents: ['model.hull.me.change'],

  datasources: {
    friends: function() {
      if (this.loggedIn()) {
        return this.api({ provider: 'facebook', path: 'me/friends' }, { fields: this.friendsFields(), limit: 1000 });
      }
    }
  },

  initialize: function() {
    this.method = (this.options.method || 'apprequests').toLowerCase();
    this.buildParams = this.buildParamsFor[this.method] || function(params) { return params; };
  },

  events: {
    'submit form': function(e) {
      e.preventDefault();
      var self = this;
      var formData = this.sandbox.dom.getFormData(this.$(e.target));
      var params = this.buildParams(formData);
      this.api({ provider: 'facebook', path: 'ui.' + this.method }, params).then(function(response) {
        self.afterSent.call(self);
      });
    },

    'change input[type="checkbox"]': function(e) {
      if (e.target && e.target.type === 'checkbox') {
        var $friend = this.$("[data-friend='" + $(e.target).val() + "']");
        if (e.target.checked) {
          $friend.addClass('bg-info');
        } else {
          $friend.removeClass('bg-info');
        }
        var val, countFriends = this.$('input[type="checkbox"]:checked').length;
        if (countFriends > 0) {
          val = "Send to " + this.$('input[type="checkbox"]:checked').length + " friends";
        } else {
          val = "Send";
        }
        this.$sendBtn.val(val);
      }
    }
  },

  actions: {
    // TODO: make this more efficient
    selectAll: function(event, action) {
      this.$('input[type="checkbox"]').each(function(i,c) {
        if (!c.checked) {
          $(c).click();
        }
      });
    },
    unselectAll: function(event, action) {
      this.$('input[type="checkbox"]').each(function(i,c) {
        if (c.checked) {
          $(c).click();
        }
      });
    },
    loginWithFacebook: function(event, action) {
      var self = this, loginAction = 'login';
      if (this.loggedIn()) {
        loginAction = 'linkIdentity';
      }
      var fn = this.sandbox[this.loginAction || loginAction];
      action.el.text("Loading...");
      var opts = {};
      if (this.options.permissions) {
        opts.scope = this.options.permissions;
      }
      fn('facebook', opts).then(function(res) {
        action.el.text("Logged in with " + res.name);
      }, function(err) {
        if (err.reason == 'identity_taken') {
          self.loginAction = 'login';
          action.el.text('Login with Facebook');
        }
      });
    }
  },

  buildParamsFor: {
    
    share: function(params) {
      params.href = params.href || this.options.href || document.location.toString();
      if (params.friends && params.friends.length > 0) {
        params.to = params.friends.join(',');
        delete params.friends;
      }
      return params;
    },

    apprequests: function(params) {
      if (params.friends && params.friends.length > 0) {
        params.to = params.friends.join(',');
        delete params.friends;
      }

      if (this.options.redirectTo) {
        params.data = JSON.stringify({ r: this.options.redirectTo });
      }

      if (this.options.title) {
        params.title = this.options.title || "Invite your friends";
      }

      return params;
    }
  },

  helpers: {
    grid: function(list, columns, options) {
      var row_start = "<div class='row'>";
      var row_end = "</div>";
      var ret = row_start;
      var colClass = 'col-md-' + 12 / columns;
      for (var i=0, j=list.length; i<j; i++) {
        ret += "<div class='" + colClass + "'>" + options.fn(list[i]) + "</div>";
        if (i > 0 && ((i+1) % columns == 0)) {
          ret += row_end;
          if ((i+1) < j) {
            ret += row_start;
          }
        }
      }
      if (((list.length) % columns) != 0) {
        ret += row_end;
      }
      return ret;
    }
  },

  beforeRender: function(data) {
    data.friendsList = []
    if (data.friends) {
      data.friendsList = this.filterFriends(data.friends.data || []);  
    }
    data.columns = this.options.columns || 2;
  },

  afterRender: function() {
    var $grid = this.$('.users-grid');
    $grid.css({
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: '300px'
    });
    $grid.removeClass('hidden');
    this.$sendBtn = this.$('input[type="submit"]');
    this.$('textarea[name="message"]').focus();
  },

  afterSent: function() {
    var $btn = this.$sendBtn;
    this.actions.unselectAll.call(this);
    $btn.val("Sent !");
    $btn.attr('disabled', true);
    setTimeout(function() {
      $btn.val("Send");
      $btn.attr('disabled', false);
    }, 1000);
  },

  friendsFields: function() {
    var _ = this.sandbox.util._;
    var fields = (this.options.friendsFields || '').split(',') || [];
    var filters = this.friendsFilters();
    _.each(filters, function(filter) {
      if (_.isObject(filter)) {
        fields = fields.concat(_.keys(filter));  
      }
    });
    fields = fields.concat(['id','name','picture']);
    return  _.compact(_.uniq(fields));
  },

  friendsFilters: function() {
    var _ = this.sandbox.util._, friendsFilters;
    if (!_.isArray(this.options.friendsFilters)) {
      friendsFilters = _.compact([this.options.friendsFilters]);
    } else {
      friendsFilters = this.options.friendsFilters;
    }
    return friendsFilters;
  },

  filterFriends: function(friends) {
    var ret, _ = this.sandbox.util._, friendsFilters = this.friendsFilters();
    if (friendsFilters.length == 0) {
      ret = friends;
    } else {
      ret = _.filter(friends, function(friend) {
        var ret = [];
        _.each(friendsFilters, function(filter) {
          if (_.isObject(filter)) {
            var filterKeys = _.keys(filter);
            ret.push(_.isEqual(_.pick(friend, filterKeys), filter));
          }
        });
        return _.any(ret);
      });
    }
    return _.sortBy(ret, function(f) { return f.name });
  }
});