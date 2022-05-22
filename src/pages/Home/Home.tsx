import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Home.module.scss'
import Button from '../Home/Components/Buttons/ButtonHeader'

type Props = {}

export const Home = (props: Props) => {
  return (
    <div className={s.Home}>
      <div className={s.container}>

      <div className={s.wrapper}>
      <div className={s.pic}>
          <GlobalSvgSelector id={'home-pic'} />
        </div>
      </div>

      <div className={s.wrapper2}>
        <h1 className={s.h1}>Добро пожаловать на сайт с рецептами "Чем богаты, тем и рады!"</h1>
        <h2 className={s.h2}>Чтобы не пропустить много интересного нажмите на кнопку снизу</h2>
        <Button
        className={s.button}
        border="none"
        height="50px"
        onClick={() => console.log("You clicked on the button")}
        radius="none"
        width = "465px"
        children = "Зарегистрироваться"
        />
        <a className={s.link} href="/cards">Продолжить без регистрации</a>
      </div>

      </div>
    </div>
  )
}