var self = require("sdk/self");
let { Cc, Ci } = require("chrome");
var SearchService = Cc["@mozilla.org/browser/search-service;1"].getService(Ci.nsIBrowserSearchService);

exports.main = function (options, callbacks) {
	SearchService.addEngineWithDetails('Cassow', 'http://cassow.com/assets/style/blue/img/cassow-sm.png', 'Cassow', 'Cassow Search Engine', 'get', 'http://cassow.com/search/Web?q={searchTerms}');
	SearchService.currentEngine = SearchService.getEngineByName('Cassow');
};
exports.onUnload = function(reason) {
	SearchService.removeEngine(SearchService.getEngineByName('Cassow'));
};