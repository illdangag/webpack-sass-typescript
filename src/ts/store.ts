import { createStore, } from 'redux';

type State = {
  count: number;
};

type Action = {
  type: actionType;
};

const initialState: State = {
  count: 0,
};

export enum actionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

function reducer (state: State = initialState, action: Action): State {
  console.log(action);
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
