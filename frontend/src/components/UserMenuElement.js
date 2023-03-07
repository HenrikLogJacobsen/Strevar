import React from 'react'
import Streak from './Streak'
import UserIcon from './UserIcon'

const UserMenuElement = ( {username} ) => {

  return (
      <div className='userMenuElement'>
          <UserIcon/>
          <Streak streak={true} days={6}/>
          <p>{username}</p>
          {/* Log out button */}
      </div>
  )
}
export default UserMenuElement