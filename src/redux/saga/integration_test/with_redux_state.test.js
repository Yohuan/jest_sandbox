import { put, select } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

describe('static state', () => {
  const storeState = {
    data: {
      foo: 'bar',
    },
  };

  const getData = state => state.data;

  function* saga() {
    const data = yield select(getData);
    yield put({ type: 'DATA', payload: data });
  }

  it('can take store state', () => (
    expectSaga(saga)
      .withState(storeState)
      .put({ type: 'DATA', payload: storeState.data })
      .run()
  ));
});

describe('dynamic state', () => {
  const initialDog = {
    name: 'Tucker',
    age: 11,
  };

  function dogReducer(state = initialDog, action) {
    if (action.type === 'HAVE_BIRTHDAY') {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    return state;
  }

  function* saga() {
    yield put({ type: 'HAVE_BIRTHDAY' });
  }

  it('handles reducers when supplying initial state', () => (
    expectSaga(saga)
      .withReducer(dogReducer, initialDog) // with initial state
      .hasFinalState({
        name: 'Tucker',
        age: 12, // <-- age in store state changed
      })
      .run()
  ));

  it('handles reducers when not supplying initial state', () => (
    expectSaga(saga)
      .withReducer(dogReducer) // without initial state
      .hasFinalState({
        name: 'Tucker',
        age: 12, // <-- age in store state changed
      })
      .run()
  ));

  it('exposes the store state', () => (
    expectSaga(saga)
      .withReducer(dogReducer, initialDog)
      .run()
      .then((result) => {
        expect(result.storeState).toEqual({
          name: 'Tucker',
          age: 12, // <-- age in store state changed
        });
      })
  ));

  it('exposes the store state using async/await', async () => {
    const { storeState } = await expectSaga(saga)
      .withReducer(dogReducer, initialDog)
      .run();

    expect(storeState).toEqual({
      name: 'Tucker',
      age: 12, // <-- age in store state changed
    });
  });
});
