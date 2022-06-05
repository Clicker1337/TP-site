import s from './SaladRecipes.module.scss'
import RecipeList from './/Components/RecipeList'

interface Props {
}

export const SaladRecipes = (item: Props) => {
  return (<div className={s.back}>
    <RecipeList />
  </div>)
}