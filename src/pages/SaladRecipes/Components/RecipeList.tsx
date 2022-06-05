import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Irecipe } from '../../../types/types'
import Recipe from './Recipe'
import s from './RecipeList.module.scss'

const RecipeList = () => {

    const [recipes, setRecipes] = useState<Irecipe[]>([])

    useEffect(() => {
        fetchIngrs()
    }, [])

    async function fetchIngrs() {
        try {
            const response = await axios.get<Irecipe[]>('https://jsonplaceholder.typicode.com/users')
            setRecipes(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className={s.saladrecipes}>
            <div className={s.maincontainer}>
                <Recipe recipes={recipes} />
            </div>
        </div>
    )
}

export default RecipeList