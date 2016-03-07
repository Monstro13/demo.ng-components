import StoreService from './store/store.service';

export default angular.module('app.services', [])
    .service('StoreService', StoreService)
    .name;