import angular from 'angular';

import components from './components';
import services from './services';
import directives from './directives';
import filters from './filters';

const css = require('./index.styl');

angular.module('app', [
    components,
    services,
    directives,
    filters
]);