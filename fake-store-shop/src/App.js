import { useState } from 'react';
import './App.css';
import Allproducts from './Components/AllProducts/Allproducts';
import Menubar from './Components/Menubar/Menubar';

function App() {

  const [count, setCount] = useState(0);

  const setCartCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Menubar count = {count}></Menubar>
      <Allproducts setCartCount = {setCartCount}></Allproducts>
    </div>
  );
}

export default App;
