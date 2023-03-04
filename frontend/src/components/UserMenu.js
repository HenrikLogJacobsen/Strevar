import React from 'react'
import Streak from './Streak'
import UserIcon from './UserIcon'

const UserMenu = ( {username} ) => {

  return (
      <div className='userMenu'>
          <UserIcon/>
          <Streak streak={true} days={6}/>
          <p>{username}</p>
          {/* Log out button */}
      </div>
  )
}
export default UserMenu