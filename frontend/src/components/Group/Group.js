import React from 'react'
import './Group.css'

const Group = ({ group, key }) => {


  return (
    <div className='group'>
        {/* <h3>{group.groupName}</h3> */}
        <h4>Styrkegruppa</h4>
        <div className='groupFlex'>
            <div className='groupInfo'>
                {/* <p>{group.description}</p> */}
                <p>Gruppa for oss osm skal bli megasterke</p>
            </div>
            <div className='groupMembers'>
                <button className='button2'>Se medlemmer...</button>
                <button className='button'>Bli med i gruppe!</button>
            </div>
        </div>
    </div>
  )
}

export default Group