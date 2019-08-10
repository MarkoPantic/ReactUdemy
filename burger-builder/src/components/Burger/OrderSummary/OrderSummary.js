import React from 'react'
import Aux from '../../../hoc/Auxiliary';
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(ingredient => {
        return <li key={ingredient}><span style={{textTransform: 'capitalize'}}>{ingredient}:</span> {props.ingredients[ingredient]}</li>;
    })

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>{ingredientSummary}</ul>
            <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancel} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary
