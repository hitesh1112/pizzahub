import Header from './Component/Header';
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Customize from './Component/Customize';
import Checkout from './Component/Checkout';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState({
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false,
  });

  useEffect(() =>{
    const data= localStorage.getItem("ingredients");
    if(data){
      setIngredients(JSON.parse(data))
    }
  },[]);
  return (
    <div >
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize ingredients={ingredients} setIngredients={setIngredients} />
          </Route>
          <Route path="/checkout">
              {/* <h1>Checkout Hello</h1>  */}
            <Checkout ingredients={ingredients}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
