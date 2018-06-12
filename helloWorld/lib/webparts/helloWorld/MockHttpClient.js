"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockHttpClient = (function () {
    function MockHttpClient() {
    }
    //console.log(ISPList);
    MockHttpClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock List', Id: '1' },
        { Title: 'Mock list business unit ', Id: '2' },
        { Title: 'xyz ', Id: '3' }];
    return MockHttpClient;
}());
exports.default = MockHttpClient;

//# sourceMappingURL=MockHttpClient.js.map
