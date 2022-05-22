import { format } from 'path'
import React from 'react'
import s from './Salad.module.scss'
import block1 from '../../assets/images/block1.png'

type Props = {}

export const Salad = (props: Props) => {
  return (
    <div className={s.salad}>
      <div className={s.ingredients}>
      <img className={s.images} src={block1} width="164" height="164" alt="Салат" />
        <p className={s.title1}>Раздел: салаты</p>
        <p className={s.title2}>Выбранное:</p>
        <div className={s.container}>
          <div className={s.textbox}>

          </div>
          <div className={s.textbox}>

          </div>
          <div className={s.textbox}>

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

      </div>


    </div>
  )
}