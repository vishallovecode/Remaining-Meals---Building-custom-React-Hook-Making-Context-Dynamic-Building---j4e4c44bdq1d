'use client'
import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const Counter = () => {
    const { meals } = useContext(MealsContext);
    const remaingMeals = meals.filter((meal) => !meal.ticked).length; // it checking whether item is ticked or not // let say intitially it will give 3 after pne ,meal clicked it will give 2
    return (
        <div>
            <h3>Meals Remaining: {remaingMeals}</h3>
        </div>
    )
}

export default Counter;
