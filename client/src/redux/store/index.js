import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/index';
import thunk  from 'redux-thunk';
//thunk me deja hacer  mis request asincronas
//si la request no es asincrona , no necesito Middleware

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  //compose si o si lleva devtools or el original 
  //aplyyMidewawe me deja trabajar con algo exterior
  //que es thunk 
);

export default store