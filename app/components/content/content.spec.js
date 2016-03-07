'use strict';

describe('component: todoContent', function () {
    let component, store, filterLeft, scope, $componentController;
    let storage = {};

    let addSomeItems = function (component) {
        let addedItem = component.add();
        addedItem = component.add();

        component.onToggle({
            id: addedItem.id
        });
    };

    beforeEach(angular.mock.module('app.components'));
    beforeEach(angular.mock.module('app.services'));
    beforeEach(angular.mock.module('app.filters'));

    beforeEach(inject(function ($rootScope, _$componentController_, $filter) {
        scope = $rootScope.$new();
        $componentController = _$componentController_;

        component = $componentController('todoContent', {
            $scope: scope
        });

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return storage[key];
        });

        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
            storage[key] = value;
        });

        filterLeft = $filter('left');
    }));

    beforeEach(function () {
        storage = {};
    });

    it(`should add item trought components method 'add'`, function () {
        let beforeLength = component.todos.length;

        let testText = `Test ${Math.random()}`;
        component.text = testText;

        component.add();
        let addedItem = component.todos[component.todos.length - 1];

        let afterLength = component.todos.length;

        expect(afterLength - beforeLength == 1 && addedItem.text == testText).toEqual(true);
    });

    it(`should delete item trought components method 'onDelete'`, function () {
        let beforeLength = component.todos.length;

        component.text = `Test ${Math.random()}`;
        let addedItem = component.add();

        component.onDelete({
            id: addedItem.id
        });

        let afterLength = component.todos.length;

        expect(afterLength == beforeLength).toEqual(true);
    });

    it(`should toggle item trought components method 'onDelete'`, function () {
        let result = false;

        component.text = `Test ${Math.random()}`;
        let addedItem = component.add();

        if (!addedItem.done) {
            addedItem = component.onToggle({
                id: addedItem.id
            });
            if (addedItem.done) {
                addedItem = component.onToggle({
                    id: addedItem.id
                });
                if (!addedItem.done)
                    result = true;
            } else result = false;
        }

        expect(result).toEqual(true);
    });

    it(`should filter items -> in result all items (isDone: undefined)`, function () {
        addSomeItems(component);

        let beforeFilter = component.todos;

        let afterFilter = component.onFilter(undefined);

        expect(beforeFilter.length == afterFilter.length).toEqual(true);
    });

    it(`should filter items -> in result only done items (isDone: true)`, function () {
        addSomeItems(component);

        let afterFilter = component.onFilter(true);

        let result = true;
        for (let i = afterFilter.length; i--;) {
            result = result && afterFilter[i].done;
        }

        expect(result).toEqual(true);
    });

    it(`should filter items -> in result only undone items (isDone: false)`, function () {
        addSomeItems(component);

        let afterFilter = component.onFilter(false);

        let result = true;
        for (let i = afterFilter.length; i--;) {
            result = result && !afterFilter[i].done;
        }

        expect(result).toEqual(true);
    });

    it(`should clear checked items`, function () {
        addSomeItems(component);

        let left = filterLeft(component.todos);
        left = +left.split(":")[0];

        component.onClearChecked();

        expect(left == component.todos.length).toEqual(true);
    });
});