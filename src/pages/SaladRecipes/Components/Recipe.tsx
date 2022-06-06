import s from './Recipe.module.scss'
import React, { FC } from 'react'
import { Irecipe } from '../../../types/types'
import ReactDOM from 'react-dom'
import { RecipeItem } from './RecipeItem';
import { useNavigate } from 'react-router-dom'

interface RecipeListProps {
  recipes: Irecipe[];
}

const SaladRecipes: FC<RecipeListProps> = ({ recipes }) => {

  const navigate = useNavigate()

  return (
    <div className={s.main}>
      {recipes.map(recipe =>
        <RecipeItem onClick={(recipe) => navigate('/recipe/' + recipe.id)} key={recipe.id} recipe={recipe} />
      )}
    </div>
  )
}

export default SaladRecipes