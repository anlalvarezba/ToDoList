import React from 'react';

function useLocalStorage(itemName, initialValue){
  // const [sincronizedItem, setSincronizedItem] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);
  // const [item, setNewItem] = React.useState(initialValue);

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  //destructurando:
  const {
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  //action creators
  const onError = (error) => dispatch( { type: actionTypes.error, payload: error } );
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item});
  const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item});
  const onSincronize = () => {dispatch({type: actionTypes.sincronize})};

  React.useEffect(() => {
    //Simulamos un segundo de delay de carga
    setTimeout(()=> {
      //Manejamos la tarea dentro de un try/catch por si ocurre algo
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;  

        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        // setNewItem(parsedItem);
        onSave(parsedItem);
      } catch(error) {
        //En caso de un error lo guardamos en el estado
        // setError(error);
        onError(error);
      } finally {
        // Se puede usar la ultima parte del try/catch para terminar la carga
        // setLoading(false);
        // setSincronizedItem(true);
        onSuccess();
      }
    } , 1000);
  }, [sincronizedItem]);

  

  const saveNewItem = (newItem) => {
    //Manejamos la tarea dentro de un try/catch por si ocurre algun error
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // setNewItem(newItem); 
      onSave(newItem); 
    } catch(error) {
      // En caso de algun error lo guardamos en el estado
      // setError(error);
      onError(error);
    }
  }

  const sincronizeItem = () => {
    // setLoading(true);
    // setSincronizedItem(false);
    onSincronize();
  };

  //Para tener un mejor control de los datos retornados los regresamos dentro de un objeto
  return {
    item,
    saveNewItem,
    loading, 
    error,
    sincronizeItem,
  }
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  save: 'SAVE',
  success: 'SUCCESS',
  sincronize: 'SINCRONIZE', 
}

const reducerObject = (state, payload) => ({
  [actionTypes.error] : {
    ...state,
    error: true, 
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    sincronizedItem: true,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };