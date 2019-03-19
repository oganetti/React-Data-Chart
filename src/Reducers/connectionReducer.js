const INITIAL_STATE = {
    payload:'Deneme',
  };
  
  export function connectionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'CHANGE_CONNECTION':
        return action.payload;
      default: return state;

      
    }
  }

  