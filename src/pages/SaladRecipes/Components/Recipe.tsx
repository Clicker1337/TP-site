import s from './Recipe.module.scss'
import React, { FC } from 'react'

interface RecipeItem {
  item: string
}

const SaladRecipes: FC<RecipeItem> = ({ item }) => {

  return (
    <div className={s.recipe}>
      <div className={s.block123}>
        <p> {item} </p>
      </div>
    </div>
  )
}

export default SaladRecipes