this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["friends-selector/main"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"media\" data-friend=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n      <input type=\"checkbox\" name=\"friends[]\" value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"friend-selected-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"hidden\" />\n      <label for=\"friend-selected-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <div class=\"pull-left\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.picture)),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-circle\" /></div>\n        <div class=\"media-body\">\n          <h5>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n          <h5 class=\"muted\">\n            ";
  if (helper = helpers.relationship_status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.relationship_status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </h5>\n        </div>\n      </label>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<h3>\n  <div class=\"pull-right\">\n    <a class=\"btn\" data-hull-action=\"selectAll\">Select all</a>\n    <a class=\"btn\" data-hull-action=\"unselectAll\">Unselect all</a>\n  </div>\n  "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.friendsList)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " friends\n</h3>\n<form>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <textarea name=\"message\" class=\"form-control\" rows=\"2\" placeholder=\"Type your invite message here !\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\"><hr/></div>\n  </div>\n  <div class=\"users-grid hidden\">\n    ";
  stack1 = (helper = helpers.grid || (depth0 && depth0.grid),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.friendsList), 3, options) : helperMissing.call(depth0, "grid", (depth0 && depth0.friendsList), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <hr/>\n      <input class=\"btn btn-primary btn-block\" type=\"submit\" name=\"method\" value=\"Send\" />\n    </div>\n  </div>\n</form>\n";
  return buffer;
  } ; 

Hull.component({
  templates: ['main'],

  datasources: {
    friends: function() {
      if (this.loggedIn()) {
        return this.api({ provider: 'facebook', path: 'me/friends' }, { fields: this.friendsFields(), limit: 1000 });
      }
    }
  },

  initialize: function() {
    this.method = (this.options.method || 'share').toLowerCase();
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

      if (this.options.redirectUri) {
        params.redirect_uri = this.options.redirectUri;
      }

      if (this.options.title) {
        params.title = this.options.title || "Come play with me";
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
    data.friendsList = this.filterFriends(data.friends.data || []);
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

    if (friendsFilters.length > 0) {
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