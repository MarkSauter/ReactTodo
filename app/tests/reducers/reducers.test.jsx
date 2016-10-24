import expect from 'expect'
import df from 'deep-freeze-strict'

import * as reducers from 'reducers'

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText on SET_SEARCH_TEXT', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };
      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted on TOGGLE_SHOW_COMPLETED', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      const res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo on ADD_TODO', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Thing to do',
          completed: false,
          createdAt: 92384237
        }
      };
      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos on ADD_TODOS', () => {
      const todos = [{
        id: '111',
        text: 'Thing to do',
        completed: false,
        createdAt: 33000,
        completedAt: undefined
      }];
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      const res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should update todo on UPDATE_TODO', () => {
      const todos = [{
        id: '123',
        text: 'Thing to do',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      const updates = {
        completed: false,
        completedAt: null
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      const res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should wipe todos on LOGOUT', () => {
      const todos = [{
        id: '123',
        text: 'Thing to do',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(0);
    });
  });
  describe('authReducer', () => {
    it('should store uid on LOGIN', () => {
      const auth = {};
      const action = {
        type: 'LOGIN',
        uid: 'abc123'
      };
      const res = reducers.authReducer(df(auth), df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should wipe auth on LOGOUT', () => {
      const auth = {
        uid: 'abc123'
      };
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(auth), df(action));

      expect(res).toEqual({});
    });
  });
});
