this.Hull=this.Hull||{},this.Hull.templates=this.Hull.templates||{},this.Hull.templates._default=this.Hull.templates._default||{},Hull.templates._default["friends-selector/main"]=function(t,e,i,n,s){function a(t,e){var n,s,a="";return a+='\n    <div class="media" data-friend="',(s=i.id)?n=s.call(t,{hash:{},data:e}):(s=t&&t.id,n=typeof s===c?s.call(t,{hash:{},data:e}):s),a+=h(n)+'">\n      <input type="checkbox" name="friends[]" value="',(s=i.id)?n=s.call(t,{hash:{},data:e}):(s=t&&t.id,n=typeof s===c?s.call(t,{hash:{},data:e}):s),a+=h(n)+'" id="friend-selected-',(s=i.id)?n=s.call(t,{hash:{},data:e}):(s=t&&t.id,n=typeof s===c?s.call(t,{hash:{},data:e}):s),a+=h(n)+'" class="hidden" />\n      <label for="friend-selected-',(s=i.id)?n=s.call(t,{hash:{},data:e}):(s=t&&t.id,n=typeof s===c?s.call(t,{hash:{},data:e}):s),a+=h(n)+'">\n        <div class="pull-left"><img src="'+h((n=t&&t.picture,n=null==n||n===!1?n:n.data,n=null==n||n===!1?n:n.url,typeof n===c?n.apply(t):n))+'" class="img-circle" /></div>\n        <div class="media-body">\n          <h5>',(s=i.name)?n=s.call(t,{hash:{},data:e}):(s=t&&t.name,n=typeof s===c?s.call(t,{hash:{},data:e}):s),a+=h(n)+'</h5>\n          <h5 class="muted">\n            ',(s=i.relationship_status)?n=s.call(t,{hash:{},data:e}):(s=t&&t.relationship_status,n=typeof s===c?s.call(t,{hash:{},data:e}):s),a+=h(n)+"\n          </h5>\n        </div>\n      </label>\n    </div>\n    "}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,t.helpers),s=s||{};var l,r,d,o="",c="function",h=this.escapeExpression,f=this,u=i.helperMissing;return o+='<h3>\n  <div class="pull-right">\n    <a class="btn" data-hull-action="selectAll">Select all</a>\n    <a class="btn" data-hull-action="unselectAll">Unselect all</a>\n  </div>\n  '+h((l=e&&e.friendsList,l=null==l||l===!1?l:l.length,typeof l===c?l.apply(e):l))+' friends\n</h3>\n<form>\n  <div class="row">\n    <div class="col-md-12">\n      <textarea name="message" class="form-control" rows="2" placeholder="Type your invite message here !">'+h((l=e&&e.options,l=null==l||l===!1?l:l.message,typeof l===c?l.apply(e):l))+'</textarea>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-md-12"><hr/></div>\n  </div>\n  <div class="users-grid hidden">\n    ',r=i.grid||e&&e.grid,d={hash:{},inverse:f.noop,fn:f.program(1,a,s),data:s},l=r?r.call(e,e&&e.friendsList,3,d):u.call(e,"grid",e&&e.friendsList,3,d),(l||0===l)&&(o+=l),o+='\n  </div>\n\n  <div class="row">\n    <div class="col-md-12">\n      <hr/>\n      <input class="btn btn-primary btn-block" type="submit" name="method" value="Send" />\n    </div>\n  </div>\n</form>\n'},Hull.component({templates:["main"],datasources:{friends:function(){return this.loggedIn()?this.api({provider:"facebook",path:"me/friends"},{fields:this.friendsFields(),limit:1e3}):void 0}},initialize:function(){this.method=(this.options.method||"share").toLowerCase(),this.buildParams=this.buildParamsFor[this.method]||function(t){return t}},events:{"submit form":function(t){t.preventDefault();var e=this,i=this.sandbox.dom.getFormData(this.$(t.target)),n=this.buildParams(i);this.api({provider:"facebook",path:"ui."+this.method},n).then(function(){e.afterSent.call(e)})},'change input[type="checkbox"]':function(t){if(t.target&&"checkbox"===t.target.type){var e=this.$("[data-friend='"+$(t.target).val()+"']");t.target.checked?e.addClass("bg-info"):e.removeClass("bg-info");var i,n=this.$('input[type="checkbox"]:checked').length;i=n>0?"Send to "+this.$('input[type="checkbox"]:checked').length+" friends":"Send",this.$sendBtn.val(i)}}},actions:{selectAll:function(){this.$('input[type="checkbox"]').each(function(t,e){e.checked||$(e).click()})},unselectAll:function(){this.$('input[type="checkbox"]').each(function(t,e){e.checked&&$(e).click()})}},buildParamsFor:{share:function(t){return t.href=t.href||this.options.href||document.location.toString(),t.friends&&t.friends.length>0&&(t.to=t.friends.join(","),delete t.friends),t},apprequests:function(t){return t.friends&&t.friends.length>0&&(t.to=t.friends.join(","),delete t.friends),this.options.redirectUri&&(t.redirect_uri=this.options.redirectUri),this.options.title&&(t.title=this.options.title||"Come play with me"),t}},helpers:{grid:function(t,e,i){for(var n="<div class='row'>",s="</div>",a=n,l="col-md-"+12/e,r=0,d=t.length;d>r;r++)a+="<div class='"+l+"'>"+i.fn(t[r])+"</div>",r>0&&(r+1)%e==0&&(a+=s,d>r+1&&(a+=n));return t.length%e!=0&&(a+=s),a}},beforeRender:function(t){t.friendsList=this.filterFriends(t.friends.data||[])},afterRender:function(){var t=this.$(".users-grid");t.css({overflowY:"auto",overflowX:"hidden",maxHeight:"300px"}),t.removeClass("hidden"),this.$sendBtn=this.$('input[type="submit"]')},afterSent:function(){var t=this.$sendBtn;this.actions.unselectAll.call(this),t.val("Sent !"),t.attr("disabled",!0),setTimeout(function(){t.val("Send"),t.attr("disabled",!1)},1e3)},friendsFields:function(){var t=this.sandbox.util._,e=(this.options.friendsFields||"").split(",")||[],i=this.friendsFilters();return t.each(i,function(i){t.isObject(i)&&(e=e.concat(t.keys(i)))}),e=e.concat(["id","name","picture"]),t.compact(t.uniq(e))},friendsFilters:function(){var t,e=this.sandbox.util._;return t=e.isArray(this.options.friendsFilters)?this.options.friendsFilters:e.compact([this.options.friendsFilters])},filterFriends:function(t){var e,i=this.sandbox.util._,n=this.friendsFilters();return e=n.length>0?t:i.filter(t,function(t){var e=[];return i.each(n,function(n){if(i.isObject(n)){var s=i.keys(n);e.push(i.isEqual(i.pick(t,s),n))}}),i.any(e)}),i.sortBy(e,function(t){return t.name})}});