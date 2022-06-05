import s from './Recipe.module.scss'
import React, { FC } from 'react'
import { Irecipe } from '../../../types/types'

interface RecipeListProps {
  recipes: Irecipe[]
}

const SaladRecipes: FC<RecipeListProps> = ({ recipes }) => {

  return (
    <div className={s.main}>
      {recipes.map(recipe =>
        <div className={s.recipe}>
          <div className={s.block123}>
            <div key={recipe.id}> {recipe.name} </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SaladRecipes