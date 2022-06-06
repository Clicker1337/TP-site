import s from './Salad.module.scss'
import block1 from '../../assets/images/block1.png'
import Selector from './Components/Selector'
import './Components/Selector'
import ReactDOM from 'react-dom'
import RecipeList from '../SaladRecipes/Components/RecipeList'

interface Props {
}

declare global {
  var GV: number;
  var GM: number;
  var GO: number;
}

export const Salad = (items: Props) => {

  return (
    <div className={s.salad}>
      <div className={s.ingredients}>
        <img className={s.images} src={block1} width="164" height="164" alt="Салат" />
        <p className={s.title1}>Раздел: салаты</p>
        <p className={s.title2}>Выбранное:</p>
        <div className={s.container}>
          <div className={s.textbox}>
            <p> {globalThis.GVL} </p>
          </div>
          <div className={s.textbox}>
          <p> {globalThis.GML} </p>
            {globalThis.GV}
          </div>
          <div className={s.textbox}>
          <p> {globalThis.GOL} </p>
          </div>
        </div>

        <div className={s.container2}>
          <div className={s.titlebox}>
            <p className={s.titlebox__text}>Овощи</p>
          </div>
          <div className={s.titlebox}>
            <p className={s.titlebox__text}>Мясо/Рыба</p>

          </div>
          <div className={s.titlebox}>
            <p className={s.titlebox__text}>Другое</p>

          </div>
        </div>


        <div className={s.container3}>
          <Selector id='selector' />
        </div>
      </div>

      <RecipeList />

    </div>
  )
}

