import axios from "axios"
import { FC, useEffect, useState } from "react"
import { Irecipe } from "../../types/types"
import { useParams, useNavigate } from 'react-router-dom'
import s from './SaladRecipePage.module.scss'

interface RecipePageParams {
  id: string;
}

export const SaladRecipePage: FC = () => {

  const [recipe, setRecipe] = useState<Irecipe | null>(null)

  useEffect(() => {
    fetchRecipe()
  })

  const params = useParams()
  const navigate = useNavigate()

  async function fetchRecipe() {
    try {
      const response = await axios.get<Irecipe>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setRecipe(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className={s.container}>
      <div className={s.box}>
        <div className={s.leftside}>
          <div className={s.title1}>
            Страница рецепта {recipe?.name}
          </div>
          <div>
            с числом {recipe?.id}
          </div>
          <button onClick={() => navigate('/salad')}> Назад </button>
        </div>
        <div className={s.rightside}>

        </div>
      </div>
    </div >
  )
}