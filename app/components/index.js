import TodoComponent from './todo/todo.component';
import ContentComponent from './content/content.component';
import ListComponent from './list/list.component';
import FooterComponent from './footer/footer.component';

export default angular.module('app.components', [])
    .component("todo", TodoComponent)
    .component("todoContent", ContentComponent)
    .component("todoList", ListComponent)
    .component("todoFooter", FooterComponent)
    .name;