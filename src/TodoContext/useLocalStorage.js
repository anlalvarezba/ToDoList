import React from 'react';

function useLocalStorage(itemName, initialValue){

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setNewItem] = React.useState(initialValue);

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

        setNewItem(parsedItem);
      } catch(error) {
        //En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // Se puede usar la ultima parte del try/catch para terminar la carga
        setLoading(false);
      }
    } , 1000);
  }, []);

  

  const saveNewItem = (newItem) => {
    //Manejamos la tarea dentro de un try/catch por si ocurre algun error
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setNewItem(newItem);  
    } catch(error) {
      // En caso de algun error lo guardamos en el estado
      setError(error);
    }
  }
  //Para tener un mejor control de los datos retornados los regresamos dentro de un objeto
  return {
    item,
    saveNewItem,
    loading, 
    error,
  }
}

export { useLocalStorage };