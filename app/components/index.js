import TodoComponent from './todo/todo.component';

export default angular.module('app.components', [])
    .component("todo", TodoComponent)
    .name;