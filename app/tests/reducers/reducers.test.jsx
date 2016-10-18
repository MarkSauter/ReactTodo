import expect from 'expect'
import df from 'deep-freeze-strict'

import * as reducers from 'reducers'

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  // describe('showCompletedReducer', () => {
  //   it('should toggle showCompleted', () => {
  //     var action = {
  //       type: 'TOGGLE_SHOW_COMPLETED'
  //     };
  //     var res = reducers.showCompletedReducer(false, action);
  //
  //     expect(res).toEqual(true);
  //   });
  // });
});
