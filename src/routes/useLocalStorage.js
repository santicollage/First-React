import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state;

  // Action creators
  const onError = (error) => dispatch({type: actionTypes.error, payload: error});
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item});
  const onSave = (item) => dispatch({type: actionTypes.save, payload: item});
  const onSincronize = (item) => dispatch({type: actionTypes.sincronize});

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;
    
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
        }
        
        onSuccess(parsedItem)
      }
      catch(error) {
        onError(error);
      }
    }, 1000)
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error){
      onError(error);
    }
  }

  const sincronizeItem = () => {
    onSincronize();
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

const initialState = ({initialValue}) => ({
  sincronizeItem: true,
  error: false,
  loading: true,
  item: initialValue
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

const reducerObject = (state,payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage }