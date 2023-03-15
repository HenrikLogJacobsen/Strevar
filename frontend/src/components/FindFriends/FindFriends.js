import React from 'react'
import { useEffect } from 'react'
import {useUserCtx} from "../../hooks/useUserCtx"
import { useUaCtx } from "../../hooks/useUaCtx"

import './findFriends.css'

const FindFriends = ( {user, users, handleClick} ) => {


  return (
    <div className="findFriends">
      {users && users.map(user => (
          <div className="friendElement" key={user._id}>
              <span className="friendInfo">{user.username}</span>
              <span className="followButton">
                  <button className="button" onClick={() => handleClick(user._id)}>Følg</button> 

              </span>
          </div>
      ))}
    </div>
  )
}

export default FindFriends