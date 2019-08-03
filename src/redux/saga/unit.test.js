import { call, put, take } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';

function identity(value) {
  return value;
}

function* mainSaga(x, y) {
  const action = yield take('HELLO');

  yield put({ type: 'ADD', payload: x + y });
  yield call(identity, action);
}

it('should test an unit tests', () => {
  const action = { type: 'TEST' };
  testSaga(mainSaga, 40, 2)
    .next()
    // assert that the saga yields `take` with `'HELLO'` as type
    .take('HELLO')
    // pass back in a value to a saga after it yields
    .next(action)
    // assert that the saga yields `put` with the expected action
    .put({ type: 'ADD', payload: 42 })
    .next()
    // assert that the saga yields a `call` to `identity` with
    // the `action` argument
    .call(identity, action)
    .next()
    // assert that the saga is finished
    .isDone();
});
