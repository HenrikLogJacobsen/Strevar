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


//   const handleClick = async (e) => {
//     e.preventDefault()

//     // POST NEW SESSION
//     if (selectedValue.length !== 0) {
//         const exercises = selectedValue.map((selected) => {
//             return allExercises.find((exercise) => selected.value === exercise._id)
//         })
//         const user_id = user.uid
//         const session = {title, exercises, user_id}
//         const response = await fetch("/api/sessions/", {
//             method: "POST",
//             body: JSON.stringify(session),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })

//         const json = await response.json()

//         if(response.ok) {
//             setTitle('')
//             setSelectedValue([])
//             console.log("Ny treningsøkt lagt til", json)
//             dispatchSession({type: "CREATE_SESSION", payload: json})
//         }
//     }
// }

const hhandleClick = async (userId) => {
    // Send a request to add the user's id to the current user's following array
    console.log(userId)
    // const response = await fetch(`/api/users/${userId}/follow`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ followeeId: user._id }),
    // });
    // if (!response.ok) {
    //   throw new Error('Unable to follow user');
    // }
  }

  return (
    <div className="findFriends">
      {users && users.map(user => (
          <div className="friendElement" key={user._id}>
              <span className="friendInfo">{user.username}</span>
              <span className="followButton">
                  <button className="button" onClick={() => hhandleClick(user._id)}>Følg</button> 

              </span>
          </div>
      ))}
    </div>
  )
}

export default FindFriends