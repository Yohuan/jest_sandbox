import * as matchers from 'redux-saga-test-plan/matchers';
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import api from './my_api';

function* userSaga() {
  try {
    const action = yield take('REQUEST_USER');
    const user = yield call(api.fetchUser, action.userId);
    const pet = yield call(api.fetchPet, user.petId);
    yield put({
      type: 'RECEIVE_USER',
      payload: { user, pet },
    });
  } catch (e) {
    yield put({ type: 'FAIL_USER', error: e });
  }
}

it('should fetch the user', () => {
  const fakeUser = { name: 'Yohuan', petId: 666 };
  const fakeDog = { name: 'Bunie' };

  return expectSaga(userSaga, api)
    .provide([ // mock the api call
      [call(api.fetchUser, 1199), fakeUser],
      [matchers.call.fn(api.fetchPet), fakeDog],
    ])
    .put({
      type: 'RECEIVE_USER',
      payload: { user: fakeUser, pet: fakeDog },
    })
    .dispatch({ type: 'REQUEST_USER', userId: 1199 })
    .run();
});

it('should handle error', () => {
  const error = new Error('error');

  return expectSaga(userSaga, api)
    .provide([ // mock the error case
      [matchers.call.fn(api.fetchUser), throwError(error)],
    ])
    .put({ type: 'FAIL_USER', error })
    .dispatch({ type: 'REQUEST_USER', userId: 1199 })
    .run();
});
