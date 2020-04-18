import React from 'react'
import style from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
  return (
    <ul className={style.AnswersList}>
      {props.answers.map((answer, i) => {
        return (
          <AnswerItem 
          answer={answer} 
          key={i}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList