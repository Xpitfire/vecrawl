﻿var signup = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"alert alert-danger\">"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Signup</h1>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.message : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n    <!-- LOGIN FORM -->\r\n    <form action=\"/signup\" method=\"post\">\r\n        <div class=\"form-group required\">\r\n            <label class=\"control-label\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" required>\r\n        </div>\r\n        <div class=\"form-group required\">\r\n            <label class=\"control-label\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>First Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstname\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastname\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Birthday</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"birthday\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button>\r\n    </form>\r\n\r\n    <hr>\r\n\r\n    <p>Already have an account? <a href=\"/login\">Login</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>";
},"useData":true});