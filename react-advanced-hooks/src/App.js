import logo from './logo.svg';
import './App.css';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import { useState } from 'react';
import { CountContext } from './Components/UseContext/CountContext';
import ParentComponent from './Components/UseContext/ParentComponent';
// import MyComponent from './Components/UseWindowSize/MyComponent';
import MyComponent from './Components/UseLocalStorage/MyComponent';

function App() {

  const[count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <UseRef/> */}
      {/* <UseMemo/> */}

    {/* <CountContext.Provider value ={{count, setCount}}>
        <ParentComponent/>
    </CountContext.Provider> */}

    <MyComponent/>
    </div>
  );
}

export default App;
