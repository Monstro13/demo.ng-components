'use strict';

describe('component: todo', function () {
    let component, scope, $componentController;
    const defaultCaption = "Todo List";

    beforeEach(angular.mock.module('app.components'));

    beforeEach(inject(function ($rootScope, _$componentController_) {
        scope = $rootScope.$new();
        $componentController = _$componentController_;

        component = $componentController('todo', {
            $scope: scope
        });
    }));

    it(`should set the default caption as '${defaultCaption}'`, function () {
        expect(component.caption).toEqual(defaultCaption);
    });
});