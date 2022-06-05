import axios from 'axios'
import { useEffect, useState } from 'react'
import { Irecipe } from '../../types/types'
import Recipe from './Components/Recipe'
import s from './SaladRecipes.module.scss'

interface Props {
}

export const SaladRecipes = (items: Props) => {

  const [recipes, setRecipes] = useState<Irecipe[]>([])

  useEffect(() => {
    fetchRecipes()
  }, [])

  async function fetchRecipes() {
    try {
      const response = await axios.get<Irecipe[]>('https://jsonplaceholder.typicode.com/users')
      setRecipes(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className={s.back}>
      <div className={s.saladrecipes}>
        <div className={s.maincontainer}>
          <div className={s.recipe}> <Recipe recipes={recipes} /> </div>
        </div>
      </div>
    </div>
  )
}