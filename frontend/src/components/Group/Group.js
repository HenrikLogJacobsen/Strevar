import React, { useState } from 'react'
import './Group.css'

const Group = ({ group, key }) => {
  const [showMembers, setShowMembers] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);

  const handleMembersClick = () => {
    setShowMembers(!showMembers);
    setArrowRotation(arrowRotation + 180);
  }

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
                <p className='memberBtn' onClick={handleMembersClick}>
                  Se medlemmer 
                  {showMembers && (
                    <svg width="15px" height="15px" viewBox="100 100 800 400"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"></path></g></svg>
                  )}
                  {!showMembers && (
                    <svg width="15px" height="15px" viewBox="280 300 800 500" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"></path></g></svg>
                  )}
                </p>
                {showMembers && (
                <div className="memberList">
                    {/* List of group members */}
                    <ul>
                        <li>hfubufrbf</li>
                        <li>hfubufrbf</li>
                        <li>hfubufrbf</li>
                        <li>hfubufrbf</li>
                        <li>hfubufrbf</li>
                        <li>hfubufrbf</li>
                    </ul>
                </div>
                )}
                <button className='button'>Bli med i gruppe!</button>
            </div>
        </div>
    </div>
  )
}

export default Group
