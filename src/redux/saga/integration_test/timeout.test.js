import { put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

function* mainSaga() {
  while (true) {
    const action = yield take('READY');
    yield put({ type: 'DATA', payload: action.payload });
  }
}

it('shoult times out with default setting', () => (
  expectSaga(mainSaga)
    .put({ type: 'DATA', payload: 42 })
    .dispatch({ type: 'READY', payload: 42 })
    // saga never terminates on its own
    // implicit timeout of 250ms will cancel saga
    // and print warning message to console
    // .run();
    // no warning message will be printed
    // this is useful if you expect the saga to time out
    .silentRun()
));
