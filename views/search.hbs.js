var search = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"search-result-content-box\" class=\"search-result-content\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.web : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, depth0, {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    <div class=\"outer-result-box\">\r\n        <div class=\"inner-result-box\">\r\n            <div class=\"result-info-box\">\r\n                <h3 class=\"result-info-title\"><a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.u : depth0), depth0))
    + "\">";
  stack1 = lambda((depth0 != null ? depth0.t : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</a></h3>\r\n                <div class=\"result-info-text\">";
  stack1 = lambda((depth0 != null ? depth0.a : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\r\n                <div class=\"result-info-link ellipsis\"><a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.u : depth0), depth0))
    + "\"><span class=\"result-prev-link\">";
  stack1 = lambda((depth0 != null ? depth0.u : depth0), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span></a></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"search-img-result-content-box\" class=\"outer-gallery-box\">\r\n    <!-- The Bootstrap Image Gallery lightbox, should be a child element of the document body -->\r\n    <div id=\"blueimp-gallery\" class=\"blueimp-gallery\" data-use-bootstrap-modal=\"false\">\r\n        <!-- The container for the modal slides -->\r\n        <div class=\"slides\"></div>\r\n        <!-- Controls for the borderless lightbox -->\r\n        <h3 class=\"title\"></h3>\r\n        <a class=\"prev\"></a>\r\n        <a class=\"next\"></a>\r\n        <a class=\"close\">x</a>\r\n        <a class=\"play-pause\"></a>\r\n        <ol class=\"indicator\"></ol>\r\n        <!-- The modal dialog, which will be used to wrap the lightbox content -->\r\n        <div class=\"modal fade\">\r\n            <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" aria-hidden=\"false\">&times;</button>\r\n                        <h4 class=\"modal-title\"></h4>\r\n                    </div>\r\n                    <div class=\"modal-body next\"></div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default pull-left prev\">\r\n                            <i class=\"glyphicon glyphicon-chevron-left\"></i>\r\n                            Previous\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-primary next\">\r\n                            Next\r\n                            <i class=\"glyphicon glyphicon-chevron-right\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"links\" class=\"inner-gallery-box\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.img : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <div class=\"grid-img-box\">\r\n            <a href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.j : depth0), depth0))
    + "\" title=\""
    + escapeExpression(lambda((depth0 != null ? depth0.i : depth0), depth0))
    + "\" data-gallery>\r\n                <img class=\"img-prev-style\" src=\""
    + escapeExpression(lambda((depth0 != null ? depth0.h : depth0), depth0))
    + "\" alt=\""
    + escapeExpression(lambda((depth0 != null ? depth0.i : depth0), depth0))
    + "\" />\r\n                <div class=\"img-meta-box\">\r\n                    <span class=\"img-meta-info hidden ellipsis\">"
    + escapeExpression(lambda((depth0 != null ? depth0.ih : depth0), depth0))
    + "x"
    + escapeExpression(lambda((depth0 != null ? depth0.iw : depth0), depth0))
    + " - "
    + escapeExpression(lambda((depth0 != null ? depth0.u : depth0), depth0))
    + "</span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"search-video-result-content-box\" class=\"video-box\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.video : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, depth0, {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <div class=\"outer-video-box\">\r\n        <div class=\"inner-video-box\">\r\n            <a href=\"https://www.youtube.com/watch?v="
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" title=\""
    + escapeExpression(lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\">\r\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.hqDefault : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\" />\r\n            </a>\r\n        </div>\r\n    </div>\r\n";
},"12":function(depth0,helpers,partials,data) {
  return "<div class=\"jumbotron\">\r\n    <h2>\r\n        Sorry, no results found...\r\n    </h2>\r\n</div>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.web : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.img : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.video : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.none : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});