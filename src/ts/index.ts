import '../css/style.scss';
import { store, actionType, } from './store';

import Car from './car/car';
const car: Car = new Car();

const render1 = () => {
  console.log('[Render1]', store.getState());
};

const render2 = () => {
  console.log('[Render2]', store.getState());
};

store.subscribe(render1);
store.subscribe(render2);

const incrementElement = document.getElementById('increment');
if (incrementElement) {
  incrementElement.addEventListener('click', function () {
    store.dispatch({ type: actionType.INCREMENT });
  });
}
const decrementElement = document.getElementById('decrement');
if (decrementElement) {
  decrementElement.addEventListener('click', function () {
    store.dispatch({ type: actionType.DECREMENT });
  });
}
