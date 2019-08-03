import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

function* userSaga(api) {
  const action = yield take('REQUEST_USER');
  const user = yield call(api.fetchUser, action.userId);

  yield put({ type: 'RECEIVE_USER', user });
}

it('should demonstrate basic usage', () => {
  const api = {
    fetchUser: id => ({ id, name: 'Yohuan' }),
  };

  const action = {
    type: 'REQUEST_USER',
    userId: 1199,
  };

  return expectSaga(userSaga, api)
    // expect that the `put` will eventually happen
    .put({
      type: 'RECEIVE_USER',
      user: { id: 1199, name: 'Yohuan' },
    })
    // dispatch any action that the saga will "take"
    .dispatch(action)
    // start the test and returns a Promise
    .run();
});
