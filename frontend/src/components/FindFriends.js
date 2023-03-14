import React from 'react'
import { useEffect } from 'react'
import {useUserCtx} from "../hooks/useUserCtx"

const FindFriends = () => {


  const {users, dispatchUser} = useUserCtx()


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("api/user/")
      const json = await response.json()


      if (response.ok) {
        dispatchUser({type: "SET_USERS", payload: json})
      }
    }
    
    fetchUsers()
  }, [dispatchUser])




  return (
    <div className="findFriends">
      {users && users.map(user => (
          <div className="friendElement" key={user._id}>
              <span className="friendInfo">{user.username}</span>
              <span className="followButton">
                  <button className="button">Følg</button> 
              </span>
          </div>
      ))}
    </div>
  )
}

export default FindFriends