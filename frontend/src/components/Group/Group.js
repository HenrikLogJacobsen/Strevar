import React from 'react'
import './Group.css'

const Group = ({ group, key }) => {


  return (
    <div className='group'>
        {/* <h3>{group.groupName}</h3> */}
        <h4>Styrkegruppa</h4>
        {/* <p>{group.description}</p> */}
        <p>Gruppa for oss osm skal bli megasterke</p>
        <button className='button'>Bli med i gruppe!</button>
    </div>
  )
}

export default Group