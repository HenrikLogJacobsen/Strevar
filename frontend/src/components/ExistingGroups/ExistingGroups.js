import {React, useEffect } from 'react'
import { useExistingGroupCtx } from '../../hooks/useExistingGroupCtx'
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
            
            {/* hardkoding for eksempel, skal hente ut en liste med grupper fra backend */}
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