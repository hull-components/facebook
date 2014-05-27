this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["friends-selector/main"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n    <small class=\"pull-right\">\n      <a href=\"#\" data-hull-action=\"selectAll\">Select all</a>\n      &nbsp;|&nbsp;\n      <a href=\"#\" data-hull-action=\"unselectAll\">Unselect all</a>\n    </small>\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <form>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.caption), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <textarea name=\"message\" required class=\"form-control\" rows=\"2\" placeholder=\""
    + escapeExpression((helper = helpers.fallback || (depth0 && depth0.fallback),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), "Type your invite message here !", options) : helperMissing.call(depth0, "fallback", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.placeholder), "Type your invite message here !", options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n          <hr/>\n        </div>\n      </div>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.friendsList), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      \n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <input class=\"btn btn-primary btn-block\" type=\"submit\" name=\"method\" value=\"Send Invitation\" />\n        </div>\n      </div>\n    </form>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n          <p>This is a text explanation of what's happening here....</p>\n          ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"users-grid hidden\">\n        ";
  stack1 = (helper = helpers.grid || (depth0 && depth0.grid),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.friendsList), (depth0 && depth0.columns), options) : helperMissing.call(depth0, "grid", (depth0 && depth0.friendsList), (depth0 && depth0.columns), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <hr/>\n      ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"media\" data-friend=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <div class=\"pull-right\">\n            <input type=\"checkbox\" name=\"friends[]\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"friend-selected-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"hidden\"/>\n          </div>\n          <div class=\"pull-left\">\n            <label for=\"friend-selected-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.picture)),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /></label>\n          </div>\n          <label for=\"friend-selected-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"media-body\">\n              <h5>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n            </div>\n          </label>\n        </div>\n        </a>\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n    <button class=\"btn btn-primary\" data-hull-action=\"loginWithFacebook\">\n      Login with Facebook\n    </button>\n    ";
  }

  buffer += "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.friendsList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <h2 class=\"panel-title\">"
    + escapeExpression((helper = helpers.fallback || (depth0 && depth0.fallback),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.title), "Select friends", options) : helperMissing.call(depth0, "fallback", ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.title), "Select friends", options)))
    + "</h2>\n  </div>\n\n  <div class=\"panel-body\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.loggedIn)),stack1 == null || stack1 === false ? stack1 : stack1.facebook), {hash:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n</div>";
  return buffer;
  } ; 

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