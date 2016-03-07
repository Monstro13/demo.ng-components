function ListComponentController() {
    const ctrl = this;
};

const ListComponent = {
    template: require('./list.template.jade'),
    bindings: {
        todos: '<',
        onDelete: '&',
        onToggle: '&'
    },
    controller: ListComponentController
};

export default ListComponent;