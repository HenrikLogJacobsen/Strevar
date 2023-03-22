import React from 'react'
import CreateGroups from '../../components/CreateGroups/CreateGroups'
import ExistingGroups from '../../components/ExistingGroups/ExistingGroups'
import './groups.css'

const Groups = () => {
  return (
    <div className='groups'>
        <h1>Grupper</h1>
        <ExistingGroups/>
        <CreateGroups/>
    </div>
  )
}

export default Groups