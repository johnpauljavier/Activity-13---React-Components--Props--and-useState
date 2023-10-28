import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from "./Header";
import Counter from "./Counter";
import Footer from './Footer';


function App() {
  //state
  const [title, setTitle] = useState("Activity 13 - React Components, Props, and useState");
  const [count, setCount] = useState(0) ;


  return (
    <>
      <Header title={title} count={count}/>

      <Counter count={count} setCount={setCount}/>
      
      <Footer copyright="&copy; Copyright 2023 John Paul S. Javier"/>  
    </>
  )
}

export default App
