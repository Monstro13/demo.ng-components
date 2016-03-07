function TodoComponentController() {
    const ctrl = this;

    ctrl.caption = "Todo List";
};

const TodoComponent = {
    template: require('./todo.template.jade'),
    controller: TodoComponentController
};

export default TodoComponent;