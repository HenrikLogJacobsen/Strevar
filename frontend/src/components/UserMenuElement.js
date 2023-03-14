import React from 'react'
import Streak from './Streak'
import UserIcon from './UserIcon'

const UserMenuElement = ( {streak, days} ) => {

  return (
      <div className='userMenuElement'>
          <UserIcon/>
          <Streak streak={true} days={6}/>
      </div>
  )
}
export default UserMenuElement