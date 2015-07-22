var request = require('request'), url = require('url'), $ = require('jquery');
var vecrawl;
(function (vecrawl) {
    function handleSimpleRequest(that, apiCall) {
        request(apiCall, function (err, response, body) {
            if (err || !body || !response || response.statusCode !== 200) {
                that.callback(null);
            }
            else {
                if (body)
                    that.callback(JSON.parse(body));
                else
                    that.callback(null);
            }
        });
    }
    function handleDoubleRequest(that, dummyCall, apiCall) {
        request(dummyCall, function (err, response, body) {
            request(apiCall, function (err, response, body) {
                if (err || !body || !response || response.statusCode !== 200) {
                    that.callback(null);
                }
                else {
                    if (body)
                        that.callback(JSON.parse(body));
                    else
                        that.callback(null);
                }
            });
        });
    }
    var SearchAutoComplete = (function () {
        function SearchAutoComplete(callback) {
            this.callback = callback;
        }
        SearchAutoComplete.prototype.autoComplete = function (ac) {
            var that = this;
            var apiCall = {
                uri: 'https://ac.duckduckgo.com/ac/?q=' + ac,
                method: 'GET'
            };
            var dummyCall = {
                uri: 'https://ac.duckduckgo.com/ac/?callback=jQuery110200034146432299166918_1420827980671&q=' + ac,
                method: 'GET'
            };
            handleSimpleRequest(that, apiCall);
        };
        return SearchAutoComplete;
    })();
    vecrawl.SearchAutoComplete = SearchAutoComplete;
    var SearchEngine = (function () {
        function SearchEngine(callback) {
            this.callback = callback;
        }
        SearchEngine.prototype.search = function (text, type) {
            var that = this;
            var apiCall = {
                uri: '',
                method: 'GET'
            };
            var dummyCall = {
                uri: '',
                method: 'GET'
            };
            if (type == 'filter-web') {
                apiCall.uri = 'https://duckduckgo.com/d.js?q=' + text + '&t=D&l=us-en&p=1&o=json&s=0';
                dummyCall.uri = 'https://duckduckgo.com/?q=' + text;
            }
            else if (type == 'filter-img') {
                apiCall.uri = 'https://duckduckgo.com/i.js?q=' + text + '&o=json';
                dummyCall.uri = 'https://duckduckgo.com/?q=' + text + '&ia=images';
            }
            else if (type == 'filter-video') {
                apiCall.uri = 'http://gdata.youtube.com/feeds/api/videos/?q=' + text + '&v=2&alt=jsonc';
                dummyCall = null;
            }
            request(dummyCall, function () {
            });
            setTimeout(function () {
                handleSimpleRequest(that, apiCall);
            }, 100);
        };
        return SearchEngine;
    })();
    vecrawl.SearchEngine = SearchEngine;
})(vecrawl = exports.vecrawl || (exports.vecrawl = {}));
//# sourceMappingURL=vecrawl.js.map