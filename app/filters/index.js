import left from './left/left.filter';

export default angular.module('app.filters', [])
    .filter("left", left)
    .name;