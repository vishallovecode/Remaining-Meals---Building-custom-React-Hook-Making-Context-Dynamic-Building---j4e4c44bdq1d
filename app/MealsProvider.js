'use client'
import React, { createContext, useState } from "react";

export const MealsContext = createContext(); // context api
const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]

const MealsProvider = ({ children }) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (id) => {
        setMeals(
            meals.map((meal) => (
                meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
            ))
        );
    }

    return (
        <MealsContext.Provider value={{ meals, tickMeal }}>
            {children}
        </MealsContext.Provider>
    );
};

export default MealsProvider;
