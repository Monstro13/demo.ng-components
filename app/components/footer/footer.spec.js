'use strict';

describe('component: todoFooter', function () {
    let component, scope, $componentController;
    const defaultCaption = "All";
    const completedCaption = "Completed";
    const activeCaption = "Active";

    beforeEach(angular.mock.module('app.components'));

    beforeEach(inject(function ($rootScope, _$componentController_) {
        scope = $rootScope.$new();
        $componentController = _$componentController_;

        component = $componentController('todoFooter', {
            $scope: scope
        });
    }));

    it(`should set correct caption of current filter`, function () {
        component.onFilter = function () {};

        expect(component.currFilter).toEqual(defaultCaption);
        component.filter(true);
        expect(component.currFilter).toEqual(completedCaption);
        component.filter(false);
        expect(component.currFilter).toEqual(activeCaption);
    });
});