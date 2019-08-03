import { put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

function* mainSaga() {
  // Received almost immediately
  yield take('FOO');
  // Received after 250ms
  yield take('BAR');
  yield put({ type: 'DONE' });
}

it('can delay actions', () => {
  return expectSaga(mainSaga)
    .put({ type: 'DONE' })
    .dispatch({ type: 'FOO' })
    .delay(250)
    .dispatch({ type: 'BAR' })
    .run({ timeout: false });
});
