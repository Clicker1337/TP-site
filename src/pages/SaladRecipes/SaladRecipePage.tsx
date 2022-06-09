import axios from "axios"
import { FC, useEffect, useState } from "react"
import { Icomments, Irecipe } from "../../types/types"
import { useParams, useNavigate } from 'react-router-dom'
import s from './SaladRecipePage.module.scss'
import Comments from "./Comments/CommentItem"
import { GlobalPngSelector } from "../../assets/images/GlobalPngSelector"


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
      //alert(e)
    }
  }

  const [comments, setComments] = useState<Icomments[]>([])
  useEffect(() => {
    fetchComments()
  })
  async function fetchComments() {
    try {
      const response = await axios.get<Icomments[]>('https://jsonplaceholder.typicode.com/posts/' + params.id + '/comments')
      setComments(response.data)
    } catch (e) {
      //alert(e)
    }
  }

  globalThis.recipeID = Number(params.id)

  return (
    <div className={s.container}>
      <div className={s.box}>
        <div className={s.upperside}>
          <div className={s.leftside}>
          <button className={s.button} onClick={() => navigate('/salad')}> Назад </button>
            <div className={s.title1}>
              Страница {recipe?.name}
            </div>
            <div>
              {recipe?.name}{recipe?.name}{recipe?.name}{recipe?.name}
              {recipe?.name}{recipe?.name}{recipe?.name}{recipe?.name}
              {recipe?.name}{recipe?.name}{recipe?.name}{recipe?.name}
              {recipe?.name}{recipe?.name}{recipe?.name}{recipe?.name}
            </div>
          </div>
          <div className={s.rightside}>
            <div className={s.image}> <GlobalPngSelector id={globalThis.recipeID} /> </div>

          </div>
        </div>
        <div className={s.bottomside}>
          <div className={s.comments}> {comments.map(comment => <Comments comment={comment} />)} </div>
        </div>
      </div>
    </div >
  )
}