import React from 'react'
import MealsProvider from './MealsProvider';
import MealsList from './MealsList';
import Counter from './Counter';

function Home() {
  return (
    <div id="main">
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  )
}

export default Home
