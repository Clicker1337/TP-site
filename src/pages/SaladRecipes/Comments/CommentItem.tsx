import s from './CommentItem.module.scss'
import React, { FC } from 'react'
import { Icomments, Irecipe } from '../../../types/types'

interface RecipeListProps {
  comment: Icomments;
}

const SaladRecipes: FC<RecipeListProps> = ({ comment }) => {

  return (
    <div className={s.container}>
      <div className={s.title}>
        {comment.name}
      </div>
      <div className={s.main}>
        <div className={s.comment}>
        {comment.body}
        </div>
      </div>
    </div>
  )
}

export default SaladRecipes