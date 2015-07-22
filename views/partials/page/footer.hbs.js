var footer = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"footer-column col-one\">\r\n    <h3>Subscribe</h3>\r\n    <ul>\r\n        <li><a href=\"http://twitter.com\" target=\"_blank\">Twitter</a></li>\r\n        <li><a href=\"https://plus.google.com\" target=\"_blank\" rel=\"publisher\">Google+</a></li>\r\n        <li><a href=\"http://www.facebook.com\" target=\"_blank\">Facebook</a></li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"footer-column col-two\">\r\n    <h3>Browse</h3>\r\n    <ul>\r\n        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.urlRoot || (depth0 != null ? depth0.urlRoot : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlRoot","hash":{},"data":data}) : helper)))
    + "\" title=\"Go to VeCrawl home\">Home</a></li>\r\n        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.urlRoot || (depth0 != null ? depth0.urlRoot : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlRoot","hash":{},"data":data}) : helper)))
    + "/profile\" title=\"User Profile\">Profile</a></li>\r\n        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.urlRoot || (depth0 != null ? depth0.urlRoot : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlRoot","hash":{},"data":data}) : helper)))
    + "/settings\" title=\"User Settings\">Settings</a></li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"footer-column col-three\">\r\n    <h3>Information</h3>\r\n    <ul>\r\n        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.urlRoot || (depth0 != null ? depth0.urlRoot : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlRoot","hash":{},"data":data}) : helper)))
    + "/support\" title=\"The VeCrawl Support\">Support</a></li>\r\n        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.urlRoot || (depth0 != null ? depth0.urlRoot : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlRoot","hash":{},"data":data}) : helper)))
    + "/about\" title=\"More about VeCrawl\">About</a></li>\r\n        <li><a href=\""
    + escapeExpression(((helper = (helper = helpers.urlRoot || (depth0 != null ? depth0.urlRoot : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"urlRoot","hash":{},"data":data}) : helper)))
    + "/contact\" title=\"Contact Us for more Information\">Contact</a></li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"clearfix visible-xs-block\"></div>";
},"useData":true});