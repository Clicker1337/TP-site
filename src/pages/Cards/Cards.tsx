import React from 'react'
import s from './Cards.module.scss'
import block1 from '../../../src/assets/images/block1.png'
import block2 from '../../../src/assets/images/block2.png'
import block3 from '../../../src/assets/images/block3.png'

interface Props {
}

export const Cards = (props: Props) => {
  return (
    <div className={s.cards}>
      <div className={s.container}>
        <a href="/salad" className={s.category_block}>
          <p className={s.titleblock}>Салаты</p>
          <img className={s.images} src={block1} width="164" height="164" alt="Салат" />
        </a>
        
        <a href="/soup" className={s.category_block}>
        <p className={s.titleblock}>Супы</p>
        <img className={s.images} src={block2} width="164" height="164" alt="Суп" />
        </a>
          
        <a href="/chicken" className={s.category_block}>
        <p className={s.titleblock}>Горячее</p>
        <img className={s.images} src={block3} width="188" height="188" alt="Горячее" />
        </a>
          
        </div>
      </div>
  )
}