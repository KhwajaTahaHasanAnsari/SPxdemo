"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockHttpClient = (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock List', Id: '1', value: '' },
        { Title: 'Mock List 2', Id: '2', value: '' },
        { Title: 'Mock List 3', Id: '3', value: '' }];
    return MockHttpClient;
}());
exports.default = MockHttpClient;

//# sourceMappingURL=MockHttpClient.js.map
