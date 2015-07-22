var profile = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<div class=\"jumbotron\">\r\n    <h1><span class=\"fa fa-database\"></span> Profile Page</h1>\r\n    <a href=\"/logout\" class=\"btn btn-default btn-sm\">Logout</a>\r\n</div>\r\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"row\">\r\n        <!-- LOCAL INFORMATION -->\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"well\">\r\n                <h3><span class=\"fa fa-user\"></span> Local</h3>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.email : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n            </div>\r\n        </div>\r\n\r\n        <!-- FACEBOOK INFORMATION -->\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"well\">\r\n                <h3 class=\"text-primary\"><span class=\"fa fa-facebook\"></span> Facebook</h3>\r\n\r\n                <!-- check if the user has this token (is the user authenticated with this social account) -->\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.facebook : stack1)) != null ? stack1.token : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <p>\r\n                    <strong>id</strong>: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1._id : stack1), depth0))
    + "<br>\r\n                    <strong>email</strong>: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.local : stack1)) != null ? stack1.email : stack1), depth0))
    + "<br>\r\n                </p>\r\n\r\n                <a href=\"/unlink/local\" class=\"btn btn-default\">Unlink</a>\r\n";
},"6":function(depth0,helpers,partials,data) {
  return "                <a href=\"/connect/local\" class=\"btn btn-default\">Connect Local</a>\r\n";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <p>\r\n                    <strong>id</strong>: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.facebook : stack1)) != null ? stack1.id : stack1), depth0))
    + "<br>\r\n                    <strong>email</strong>: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.facebook : stack1)) != null ? stack1.email : stack1), depth0))
    + "<br>\r\n                    <strong>name</strong>: "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.facebook : stack1)) != null ? stack1.name : stack1), depth0))
    + "<br>\r\n                </p>\r\n\r\n                <a href=\"/unlink/facebook\" class=\"btn btn-primary\">Unlink</a>\r\n";
},"10":function(depth0,helpers,partials,data) {
  return "                <a href=\"/connect/facebook\" class=\"btn btn-primary\">Connect Facebook</a>\r\n";
  },"12":function(depth0,helpers,partials,data) {
  return "    <div class=\"jumbotron\">\r\n        <h1>User Authentication Required</h1>\r\n        <p>Sign in and view your profile!</p>\r\n        <p>\r\n            <a href=\"/signin\" class=\"btn btn-primary btn-lg\" role=\"button\">\r\n                <span class=\"glyphicon glyphicon-user\"></span>\r\n                Sign in!\r\n            </a>\r\n        </p>\r\n    </div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.user : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n<div class=\"row-wrapper\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.user : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n</div>";
},"useData":true});