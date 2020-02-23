import {useState} from 'react'
    // we need a key (must be a string) and a value (can be anything)
        // add key and initialValue as parameters to the hook
const useLocalStorage = (key, initVal) => {

    // Set up a state property called storedValue
    // This state property is going to take a function as it's initial value
    // callback function returns is what gets set as the intialValue for the state property.
    const [storedValue, setStoredValue] = useState(() => {

        // Check to see if the item we passed in already exists in localStorage
        const item = window.localStorage.getItem(key)
        // return that value, otherwise we'll return whatever initialValue was passed in
        return item? JSON.parse(item) : initVal;
    });
    const setValue = value =>  {
        setStoredValue(value);
       
        window.localStorage.setItem(key, JSON.stringify(value))
    };
    return [storedValue, setValue];
}
export default useLocalStorage

 // if you pass in arrays or objects to localStorage, you will need to parse it into JSON