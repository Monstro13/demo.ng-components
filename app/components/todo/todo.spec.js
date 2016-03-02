'use strict';

describe('component: todo', function () {
    let component, scope, hero, $componentController;
    const defaultCaption = "Todo List";

    beforeEach(angular.mock.module('app.components'));

    beforeEach(inject(function ($rootScope, _$componentController_) {
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    it(`should set the default caption as '${defaultCaption}'`, function () {
        component = $componentController('todo', {
            $scope: scope
        });

        expect(component.caption).toEqual(defaultCaption);
    });
});