import { createStore, combineReducers } from 'redux';
import frameReducer from '../Reducers/frameReducer';



function saveToLocalStorage(state){
    try{
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state',serializedState)
    }catch(e){
    console.log(e)
  }
  }
  
  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) return undefined
      return JSON.parse(serializedState)
    } catch(e) {
      console.log(e)
      return undefined
    }
  }
  
  
  const rootReducer = combineReducers({
  
    frameState: frameReducer,
  
  });
  
const persistedState = loadFromLocalStorage();


const store = createStore(rootReducer,persistedState,window.devToolsExtension && window.devToolsExtension());

  
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;