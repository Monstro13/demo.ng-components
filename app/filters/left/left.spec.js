'use strict';

describe('component: todo', function () {
    let filter;
    const expectValue = "2: items left";

    // 2 items left
    let mockData = [{
        done: true
    }, {
        done: true
    }, {
        done: false
    }, {
        done: true
    }, {
        done: false
    }];

    beforeEach(angular.mock.module('app.filters'));

    beforeEach(inject(function ($filter) {
        filter = $filter('left');
    }));

    it(`should be equal to '${expectValue}'`, function () {
        expect(filter(mockData)).toEqual(expectValue);
    });
});