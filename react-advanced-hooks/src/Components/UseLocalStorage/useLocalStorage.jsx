import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, intialValue = "") => {
    const [value, setValue] = useState(()=>{
        let storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : intialValue;
    })


    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])
  return [value, setValue]
}

export default useLocalStorage