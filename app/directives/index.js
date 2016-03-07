import ngEnter from './ngEnter/ngEnter.directive';

export default angular.module('app.directives', [])
    .directive("ngEnter", ngEnter)
    .name;