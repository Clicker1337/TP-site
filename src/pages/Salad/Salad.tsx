import s from './Salad.module.scss'
import block1 from '../../assets/images/block1.png'
import Selector from './Components/Selector'
import './Components/Selector'
import ReactDOM from 'react-dom'

interface Props {
}

function tick() {
  const element1 = (<p> {globalThis.Gvegetable} </p>);
  const element2 = (<p> {globalThis.Gmeat} </p>);
  const element3 = (<p> {globalThis.Gother} </p>);
  // highlight-next-line
  ReactDOM.render(element1, document.querySelector('#veglabel'))
  ReactDOM.render(element2, document.querySelector('#meatlabel'))
  ReactDOM.render(element3, document.querySelector('#otherlabel'))
}

setInterval(tick, 100);

export const Salad = (items: Props) => {

  return (
    <div className={s.salad}>
      <div className={s.ingredients}>
        <img className={s.images} src={block1} width="164" height="164" alt="Салат" />
        <p className={s.title1}>Раздел: салаты</p>
        <p className={s.title2}>Выбранное:</p>
        <div className={s.container}>
          <div className={s.textbox}>
            <div id="veglabel" />
          </div>
          <div className={s.textbox}>
            <div id="meatlabel" />
          </div>
          <div className={s.textbox}>
            <div id="otherlabel" />
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


    </div>
  )
}

