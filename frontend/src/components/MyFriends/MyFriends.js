import React from 'react'
import './myFriends.css'

const MyFriends = ( {following} ) => {
    
  console.log(following)

  return (
    <div className='myFriends'>

      {following.map(user => <p key={user._id}>{user.username}</p>)}
      
        {/* {users && users.map(user => (
          <div className="friendElement" key={user._id}>
              <span className="friendInfo">{user.following}</span>
              <span className="followButton">
                  <button className="button" onClick={() => handleClick(user._id)}>Følg</button> 

              </span>
          </div>
      ))} */}
    </div>
  )



}

export default MyFriends