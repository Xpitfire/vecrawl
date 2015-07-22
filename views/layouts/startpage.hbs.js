var startpage = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<!doctype html>\r\n<html>\r\n<head>\r\n    <title>";
  stack1 = this.invokePartial(partials['page/title'], '', 'page/title', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</title>\r\n";
  stack1 = this.invokePartial(partials['page/head'], '    ', 'page/head', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</head>\r\n<body class=\"dark-theme\">\r\n    <div class=\"page-background\"></div>\r\n    ";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n\r\n    <div class=\"scroll-top-wrapper\">\r\n        <span class=\"scroll-top-inner\">\r\n            <i class=\"fa fa-2x fa-arrow-circle-up\"></i>\r\n        </span>\r\n    </div>\r\n\r\n    <footer class=\"footer-container\">\r\n        <div class=\"footer\">\r\n";
  stack1 = this.invokePartial(partials['page/footer'], '            ', 'page/footer', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\r\n        <div class=\"clearfix visible-xs-block\"></div>\r\n        <p>&copy; "
    + escapeExpression(((helper = (helper = helpers.copyright || (depth0 != null ? depth0.copyright : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"copyright","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </footer>\r\n";
  stack1 = this.invokePartial(partials['page/body'], '    ', 'page/body', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</body>\r\n</html>";
},"usePartial":true,"useData":true});