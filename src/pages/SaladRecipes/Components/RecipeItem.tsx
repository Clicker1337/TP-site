import React, { FC } from 'react'
import { Irecipe } from '../../../types/types'
import s from './RecipeItem.module.scss'

interface RecipeItemProps {
  recipe: Irecipe;
  onClick: (recipes: Irecipe) => void;
}

export const RecipeItem: FC<RecipeItemProps> = ({ recipe, onClick }) => {
  return (
    <div onClick={() => onClick(recipe)} className={s.recipe}>
      <div className={s.block123}>
        <p> {recipe.id} {recipe.name} </p>
      </div>
    </div>

  )
}
