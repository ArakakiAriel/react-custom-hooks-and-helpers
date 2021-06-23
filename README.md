# react-custom-hooks-and-helpers
In this repository I will be uploading usefull custom hooks and helpers to have an easy view of them


## Hooks
### useCounter
- Custom hook that can be initialized with a value and then provides a functionality to increase or decrease the value by 1 and also reset it to the default value. 

- Usage:
```js
const {counter, increment, decrement, reset} = useCounter(10) //10 indicates the default value of the counter
```

### useFetch
- Custom hook that can recieve an url, make a fetch and receive the response as result

- Usage:
```js
const {data, loading, error} = useFetch(url) 
//data will be the response of the fetch call (if there is no error) or null
//loading is a boolean that indicates if the fetch call has finished.
//error will be shown a message error (if there is an error) or null if not.
```

### useForm
- Custom hook that receive an object and creates a state of that object.

- Usage:
```js
const initialState = {id:123, name:"Pepe", email:"pepe@gmail.com"}
const [formValues, handleInputChange, reset] = useForm(initialState); //The initialState can be any object that could be filled with a form 
//formValues will be the state itself
//handleInputChange will modify the state with a new value that can be passed (Ex: handleInputChange({otherInitialState}))
//reset will be a function that reset the state value to the initialState
```

## Helpers