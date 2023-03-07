import React from 'react'

const Stats = ( {description, status, goal} ) => {

    let percent = status / goal * 100
    percent.toString()

  return (
    <div className="stats">
        <p>{description}</p>
        <p>{status} av {goal} fullført</p>
        <div className="progress-bar">
            <div className="progress-color" style={{width: percent+'%'}}></div>
        </div>
    </div>
  )
}

export default Stats