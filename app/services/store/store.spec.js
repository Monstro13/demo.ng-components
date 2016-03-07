'use strict';

describe('service: StoreService', function () {
    let store;
    let storage = {};

    let addItem = function (store) {
        let id = Math.random();
        store.add({
            id: id,
            text: `Test ${id}`,
            done: false
        });

        return id;
    };

    let addItems = function (store, n) {
        for (let i = n; i--;)
            addItem(store);
    }

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function ($injector) {
        store = $injector.get('StoreService');

        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return storage[key];
        });

        spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
            storage[key] = value;
        });
    }));

    beforeEach(function () {
        store.clearAll();
    });

    it(`should be store service defined`, function () {
        expect(!!store).toBe(true);
    });

    it(`should add item into store`, function () {
        let addedId = addItem(store);
        let test = store.getById(addedId);

        expect(test.id).toEqual(addedId);
    });

    it(`should add 2 items into store`, function () {
        addItems(store, 2);

        let items = store.getAll();

        expect(items.length).toBe(2);
    });

    it(`should delete item from store`, function () {
        let addedId = addItem(store);

        store.deleteById(addedId);

        let test = store.getById(addedId);

        expect(!!test).toBe(false);
    });

    it(`should delete all items from store`, function () {
        addItems(store, 10);

        store.clearAll();

        let items = store.getAll();

        expect(items.length).toBe(0);
    });

    it(`should set checked to item by id`, function () {
        let addedId = addItem(store);
        store.toggleItem(addedId);

        let test = store.getById(addedId);

        expect(test.done).toEqual(true);
    });

    it(`should set checked to all items`, function () {
        addItems(store, 10);

        store.setAllChecked();

        let items = store.getAll();
        let result = true;

        for (let i = items.length; i--;) {
            result = result && items[i].done;
        }

        expect(result).toEqual(true);
    });

    it(`should clear only checked items`, function () {
        addItems(store, 5);

        store.setAllChecked();

        addItems(store, 5);

        store.clearChecked();

        let items = store.getAll();

        expect(items.length).toEqual(5);
    });
});