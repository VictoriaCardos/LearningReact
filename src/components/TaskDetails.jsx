import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return (
    <>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          eaque placeat ex quam illum omnis facere ut, reprehenderit deleniti
          earum? Perferendis laborum odit quasi aut reprehenderit vel! Maxime,
          voluptatem error.
        </p>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
    </>
  )
}

export default TaskDetails
