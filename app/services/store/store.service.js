  function StoreService() {
      const storeName = 'Todos';

      this.clearAll = clearAll;
      this.add = add;
      this.getById = getById;
      this.getAll = getAll;
      this.deleteById = deleteById;
      this.toggleItem = toggleItem;
      this.setAllChecked = setAllChecked;
      this.clearChecked = clearChecked;

      function clearAll() {
          _set([]);
      };

      function add(item) {
          let todos = _get();
          todos[todos.length] = item;

          _set(todos);

          return item;
      };

      function getById(id) {
          let todos = _get();
          for (let i = todos.length; i--;) {
              if (todos[i].id == id)
                  return todos[i];
          };

          return null;
      };

      function getAll() {
          return _get();
      };

      function deleteById(id) {
          let todos = _get();
          for (let i = todos.length; i--;) {
              if (todos[i].id == id) {
                  let item = todos.splice(i, 1);
                  _set(todos);

                  return item;
              }
          };

          return null;
      };

      function toggleItem(id) {
          let todos = _get();
          for (let i = todos.length; i--;) {
              if (todos[i].id == id) {
                  todos[i].done = !todos[i].done;
                  _set(todos);

                  return todos[i].done;
              }
          };

          return false;
      };

      function setAllChecked() {
          let todos = _get();
          for (let i = todos.length; i--;) {
              todos[i].done = true;
          };

          return _set(todos);
      };

      function clearChecked() {
          let todos = _get();
          let result = [];
          for (let i = todos.length; i--;) {
              if (!todos[i].done)
                  result[result.length] = todos[i];
          };

          return _set(result);
      };

      function _set(todos) {
          localStorage.setItem(storeName, JSON.stringify(todos));
      };

      function _get() {
          return JSON.parse(localStorage.getItem(storeName) || '[]');
      };
  };

  StoreService.$inject = [];

  export default StoreService;