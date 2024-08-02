import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

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
          setItem(parsedItem);
        }
  
        setLoading(false);
        setSincronizedItem(true);
      }
      catch(error) {
        setError(true);
        setLoading(false);
      }
    }, 3000)
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem
  }
}

export { useLocalStorage }