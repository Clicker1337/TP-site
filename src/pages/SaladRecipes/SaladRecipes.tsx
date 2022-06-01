import Recipe from './Components/Recipe'
import s from './SaladRecipes.module.scss'

interface Props {
}

export const SaladRecipes = (items: Props) => {

  return (
    <div className={s.back}>
      <div className={s.saladrecipes}>
        <div className={s.maincontainer}>
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
          <Recipe item='Рецепт label' />
        </div>
      </div>
    </div>
  )
}