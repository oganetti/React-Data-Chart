import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';



const loggerMiddleware = createLogger();

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}


const persistedState = loadFromLocalStorage();

export const store = createStore(rootReducer, persistedState, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

store.subscribe(() => saveToLocalStorage(store.getState()))

