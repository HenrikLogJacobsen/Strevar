import {React, useEffect } from 'react'
import Group from '../Group/Group'
import './ExistingGroups.css'

const ExistingGroups = () => {

    // const {groups} = useExistingGroupCtx()
  
    // useEffect(() => {
    //   const fetchGroups= async () => {
    //     const response = await fetch('api/groups/');
    //     if (response.ok) {
    //       const json = await response.json();
    //     }
    //   };
    
    //   fetchGroups();
    // });


  return (
    <div className='existingGroups'>
        <h3>Finn nye grupper</h3>
        <div className='groupContainer'>
            <Group/>
            <Group/>
            <Group/>
        {/* {groups && groups.map(group => (
            <Group group={group} key={group._id} />
          ))} */}
        </div>
    </div>
  )
}

export default ExistingGroups