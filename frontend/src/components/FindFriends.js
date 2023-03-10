import React from 'react'
import { useEffect } from 'react'
import {useUserCtx} from "../hooks/useUserCtx"

const FindFriends = () => {


  const {users, dispatchUser} = useUserCtx()


  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("api/users/")
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
          <div className="friendElement" key={user}>
              <span className="friendInfo">{user}</span>
              <span className="followButton">
                  <button className="button">Følg</button> 
              </span>
          </div>
      ))}
    </div>
  )
}

export default FindFriends