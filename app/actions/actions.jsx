import moment from 'moment';

import firebase, {githubProvider, firebaseRef} from 'app/firebase/';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText,
  };
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  };
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null,
    };
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key,
      }));
    });
  };
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos,
  };
};

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todosRef = firebaseRef.child(`users/${uid}/todos`);
    return todosRef.once('value').then((snapshot, prevChildKey) => {
      const todos = snapshot.val() || {};
      const parsedTodos = [];

      Object.keys(todos).forEach((todoID) => {
        parsedTodos.push({
          id: todoID,
          ...todos[todoID],
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates,
  };
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null,
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid,
  };
};

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked!', result);
    }).catch((error) => {
      console.log('Unable to auth', error);
    });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!');
    });
  };
};
