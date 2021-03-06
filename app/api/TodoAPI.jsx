export default {
  filterTodos: (todos, showCompleted, searchText) => {
    let filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      const text = todo.text.toLowerCase();
      return text.includes(searchText.toLowerCase());
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
  },
};
