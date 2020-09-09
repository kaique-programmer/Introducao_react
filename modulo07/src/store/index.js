import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null
);

export default store;
