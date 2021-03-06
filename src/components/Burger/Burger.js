import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const Burger = (props) => {
    let ingredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
        })
    }).reduce((total, element) => {
        return total.concat(element);
    }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
                {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;