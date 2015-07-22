var index = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"index-page-wrapper\">\r\n    <div class=\"index-content-wrapper\">\r\n        <div class=\"index-home-logo\">\r\n            <a class=\"index-logo-title\" href=\"/about\"><img class=\"index-webpage-logo-img\" src=\"/images/VeCrawlLogo.jpg\" alt=\"";
  stack1 = this.invokePartial(partials['page/title'], '', 'page/title', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += " Logo\" title=\"About ";
  stack1 = this.invokePartial(partials['page/title'], '', 'page/title', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" /></a>\r\n        </div>\r\n        <div class=\"index-outer-search-box\">\r\n            <div id=\"index-search-field\" class=\"index-inner-search-box\">\r\n                <div class=\"index-search-wrap\">\r\n";
  stack1 = this.invokePartial(partials['page/searchfield'], '                    ', 'page/searchfield', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\r\n                <div class=\"index-info-tag\">&copy; "
    + escapeExpression(((helper = (helper = helpers.copyright || (depth0 != null ? depth0.copyright : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"copyright","hash":{},"data":data}) : helper)))
    + "</div>\r\n                <div class=\"index-quick-links\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"start-bottom\">\r\n            <div class=\"start-icons\">\r\n                <a href=\"/about\"><div class=\"start-icons start-about\"></div>about</a>\r\n                <a href=\"/contact\"><div class=\"start-icons start-contact\"></div>contact</a>\r\n                <a href=\"/support\"><div class=\"start-icons start-support\"></div>support</a>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});