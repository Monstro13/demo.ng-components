function LeftFilter() {
    return function calcLeft(todos) {
        todos = todos || [];
        let count = 0;
        for (let i = todos.length; i--;) {
            if (!todos[i].done)
                count++;
        }

        return `${count}: items left`;
    };
};

LeftFilter.$inject = [];

export default LeftFilter;