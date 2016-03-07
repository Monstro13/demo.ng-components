function FooterComponentController() {
    const ctrl = this;
    ctrl.currFilter = "All";

    ctrl.filter = filter;

    function filter(isDone) {
        switch (isDone) {
        case undefined:
            ctrl.currFilter = "All";
            break;
        case true:
            ctrl.currFilter = "Completed";
            break;
        case false:
            ctrl.currFilter = "Active";
            break;
        }

        ctrl.onFilter({
            isDone: isDone
        });
    };
};

const FooterComponent = {
    template: require('./footer.template.jade'),
    bindings: {
        todos: '<',
        onFilter: '&',
        onClearChecked: '&'
    },
    controller: FooterComponentController
};

export default FooterComponent;