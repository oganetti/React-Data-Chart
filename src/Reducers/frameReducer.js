const INITIAL_STATE = {
    payload:'',
  };
  
  export function frameReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'CHANGE_SET':
        return action.payload;
      default: return state;

      
    }
  }

