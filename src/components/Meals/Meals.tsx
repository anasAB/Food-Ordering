import React, { useState, useEffect } from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
import Header from './../Layout/Header'
import './Meals.css'
import Spinner from 'src/utils/Spinner'
import { IMeal } from '../../TypeScript/TypeScriptStore';


const Meals = () => {
    const [meals, setMeals] = React.useState<IMeal[]>([])
    const [fetchStatus, setFetchStatus] = useState<Boolean>(true)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [selectedMeal, setSelectedMeal] = useState<string>('')

    useEffect(() => {
        setFetchStatus(false)
        const fetchData = async () => {
            const response = await fetch('https://food-ordering-7bdbe-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
                .then((data) => data.json())
                .catch((error) => {
                    setFetchStatus(false)
                    console.error('Error:', error);
                    console.log('Error:', error.message);
                });
            let loadedMeals: IMeal[] = []
            for (const key in response) {
                loadedMeals.push({
                    id: key,
                    name: response[key].name,
                    description: response[key].description,
                    price: response[key].price,
                    image: response[key].image,
                    ingredients: response[key].ingredients,
                    type: response[key].type,
                    amount: response[key].amount
                })
            }
            setMeals(loadedMeals)
        }
        fetchData()
        setFetchStatus(true)
        setIsLoading(false)
    }, [])

    let filteredMeals: IMeal[] = meals
    const meal = (selectValue: string) => setSelectedMeal(selectValue)

    //! update selected Meal
    if (selectedMeal !== 'all meals' && meals !== undefined) {
        filteredMeals = meals.filter((meal: any) => meal.type === selectedMeal)
    }

    //! filter the meals
    let pageLoading = isLoading && meals.length <= 0 ?
        <section className='isLoading'>
            <div className="loadingBox">
                <div className="loadingCoin" />
            </div>
        </section> :
        <AvailableMeals availableMeals={!filteredMeals ? meals : filteredMeals} />

    return (
        <>
            {!fetchStatus ? <Spinner /> :
                <>
                    <Header selectedMeal={meal} />
                    <MealsSummary />
                    {pageLoading}
                </>
            }
        </>
    )

}

export default Meals