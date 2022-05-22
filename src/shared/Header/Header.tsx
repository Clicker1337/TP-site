import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'
import Button from '../../pages/Home/Components/Buttons/ButtonHeader'
import { Link } from 'react-router-dom'

type Props = {}

export const Header = (props: Props) => {
  return (
    <div className={s.shadowblock}>
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href="/"><GlobalSvgSelector id={'header-logo'} /></a>

        </div>
        <div className={s.title}>
          Чем богаты, тем и рады

        </div>
      </div>
      <div className={s.wrapper}>
        <Button
        className={s.button}
        border="none"
        height="50px"
        onClick={() => document.location.href="/"}
        radius="none"
        width = "150px"
        children = "Войти"
        />
      </div>

    </header>
    </div>
  )
}
