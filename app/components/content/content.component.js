function ContentComponentController(StoreService) {
    const ctrl = this;

    ctrl.todos = StoreService.getAll();
    ctrl.text = "";

    ctrl.add = add;
    ctrl.onDelete = onDelete;
    ctrl.onToggle = onToggle;

    ctrl.onFilter = onFilter;
    ctrl.onClearChecked = onClearChecked;

    function add() {
        let added = StoreService.add({
            id: Math.random(),
            text: ctrl.text,
            done: false
        });

        ctrl.todos[ctrl.todos.length] = added;
        ctrl.text = "";

        return added;
    };

    function onDelete(todo) {
        let result = StoreService.deleteById(todo.id);

        if (!!result) {
            ctrl.todos = StoreService.getAll();
        };
    };

    function onToggle(todo) {
        todo.done = StoreService.toggleItem(todo.id);

        for (let i = ctrl.todos.length; i--;) {
            if (ctrl.todos[i].id == todo.id)
                ctrl.todos[i].done = todo.done;
        }

        return todo;
    };

    function onFilter(isDone) {
        switch (isDone) {
        case undefined:
            ctrl.todos = StoreService.getAll();
            return ctrl.todos;
        case true:
            ctrl.todos = filter(true);
            return ctrl.todos;
        case false:
            ctrl.todos = filter(false);
            return ctrl.todos;
        }

        function filter(isDone) {
            let todos = StoreService.getAll();
            let result = [];
            for (let i = todos.length; i--;) {
                if (todos[i].done == isDone)
                    result[result.length] = todos[i];
            };

            return result;
        };
    };

    function onClearChecked() {
        StoreService.clearChecked();
        ctrl.todos = StoreService.getAll();

        return ctrl.todos;
    };
};

ContentComponentController.$inject = ['StoreService'];

const ContentComponent = {
    template: require('./content.template.jade'),
    controller: ContentComponentController
};

export default ContentComponent;