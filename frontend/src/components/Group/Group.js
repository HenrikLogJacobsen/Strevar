import React, { useState } from 'react'
import './Group.css'

const Group = ({ group, key }) => {
  const [showMembers, setShowMembers] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);

  // const image = group.image

  //eksempel:
  const image = "https://media.npr.org/assets/img/2010/08/22/strength_wide-f82ab7c6cf40ee7df563c3a7a05f2709a38aac88-s1600-c85.webp"

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

                {/* eksempel: */}
                <p>Gruppa for oss som skal bli megasterke!</p>
                <img src={image} alt="image" />
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

                    {/* Eksempel: */}
                    {/* <ul>
                        <li>Per</li>
                        <li>Liv</li>
                        <li>Brage</li>
                        <li>Hans</li>
                        <li>Lise</li>
                        <li>Ingmar</li>
                        <li>Vigleik</li>
                        <li>Ingunn</li>
                        <li>Børge</li>
                        <li>Berit</li>
                    </ul> */}
                    <ul>
                      {group.members && group.members.map(m => (
                        <li>{m.username}</li>
                      ))}
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
