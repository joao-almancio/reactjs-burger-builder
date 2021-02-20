import React from 'react';

import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button'

const OrderSumary = (props) => {
    const ingredientSumary = Object.keys(props.ingredients).map(ingredientKey => {
        return (
        <li key={ingredientKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
        </li>)
    })
    return (<Wrapper>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            { ingredientSumary }
        </ul>
        <p><strong>Total price: $ {props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clickHandler={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clickHandler={props.purchaseContinued}>CONTINUE</Button>
    </Wrapper>)
}

export default OrderSumary