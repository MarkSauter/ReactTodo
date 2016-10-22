import $ from 'jquery'

export default {
  filterTodos: (todos, showCompleted, searchText) => {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return text.includes(searchText);
    });
    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      }
      if (a.completed && !b.completed) {
        return 1;
      }

      return 0;
    });

    return filteredTodos;
  }
};
