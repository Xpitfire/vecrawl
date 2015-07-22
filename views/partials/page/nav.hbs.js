var nav = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "                    <li id=\"nav-login-menu\" class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Menu<span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li><a href=\"/settings\">Settings</a></li>\r\n                            <li><a href=\"/profile\">Profile</a></li>\r\n                        </ul>\r\n                    </li>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                    <li role=\"presentation\" class=\"divider\"></li>\r\n                    <li id=\"nav-welcome-text\">\r\n                        <p class=\"navbar-text\">\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.name : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.avatar : stack1), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </p>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"/logout\">Log Out</a>\r\n                    </li>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <strong>Hi, </strong>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.name : stack1), depth0))
    + "\r\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.facebook : stack1)) != null ? stack1.name : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <strong>Hi, </strong>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.facebook : stack1)) != null ? stack1.name : stack1), depth0))
    + "\r\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.twitter : stack1)) != null ? stack1.displayName : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <strong>Hi, </strong>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.twitter : stack1)) != null ? stack1.displayName : stack1), depth0))
    + "\r\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.google : stack1)) != null ? stack1.name : stack1), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <strong>Hi, </strong>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.google : stack1)) != null ? stack1.name : stack1), depth0))
    + "\r\n";
},"15":function(depth0,helpers,partials,data) {
  return "                            <strong>Welcome</strong>\r\n";
  },"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.avatar : stack1), depth0))
    + "\" width=\"20\" height=\"20\">\r\n";
},"19":function(depth0,helpers,partials,data) {
  return "                            <img src=\"/images/avatar-dummy.png\" width=\"20\" height=\"20\">\r\n";
  },"21":function(depth0,helpers,partials,data) {
  return "                    <li role=\"presentation\" class=\"divider\"></li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"/auth\">Sign In</a>\r\n                    </li>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<nav class=\"navbar navbar-inverse navbar-fixed-top sticky\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" href=\"/\" title=\"";
  stack1 = this.invokePartial(partials['page/title'], '', 'page/title', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += " Home\"><img width=\"35\" src=\"/images/VeCrawlLogo_notxt_small.jpg\" alt=\"";
  stack1 = this.invokePartial(partials['page/title'], '', 'page/title', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += " Logo\" /></a>\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n";
  stack1 = this.invokePartial(partials['page/searchfield'], '            ', 'page/searchfield', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "            <button type=\"button\" id=\"menu-btn\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <div class=\"navbar-collapse\">\r\n                <ul class=\"nav navbar-nav navbar-left\">\r\n                    <li class=\"active\">\r\n                        <a id=\"filter-web\" class=\"highlight-dropdown\" href=\"#\">Web</a>\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"filter-img\" href=\"#\">Image</a>\r\n                    </li>\r\n                    <li>\r\n                        <a id=\"filter-video\" href=\"#\">Video</a>\r\n                    </li>\r\n                </ul>\r\n\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.user : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.user : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(21, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </ul>\r\n            </div>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n</nav>";
},"usePartial":true,"useData":true});