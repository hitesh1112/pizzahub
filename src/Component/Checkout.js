import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Pizzaman from '../Asset/PizzaMan.png'

function Checkout ({ingredients}){
    const history =useHistory()
    const [success, setSuccess] =useState(false)
    return(
<>
<div style={{display:"flex"}}>
<div>
<div>
    <h1>My Ingredient</h1>
    {Object.keys(ingredients).map((ingredient) =>{
        return(
            ingredients[ingredient] &&(
                <p>
                    {/* {ingredient} */}
                    {ingredient[0].toUpperCase()}
                    {ingredient.substr(1)}
                </p>
            )
        )
    })}
    <button onClick={ () =>setSuccess(true)}>Confirm</button>
    <button onClick={ () => history.push("/") }>Go back</button>
    </div>
    </div>
    <div>
{success &&(
    <div style={{textAlign:"center"}}>
        <img src={Pizzaman} alt="pizzaman" height="300px" />
        <div style={{fontFamily:"Open Sans Condensed",fontSize:35}}>
            We have received your order, Thank you
        </div>
        <div style={{fontFamily:"Comfortaa"}}>
            Order #{Math.round(Math.random()*100000)}
        </div>
        <div style={{fontFamily:"Indie Flower",fontSize:20}}>
            Will be ready in 20-30 min.
        </div>
    </div>
)}
    </div>
</div>
</>

    )
}
export default Checkout;