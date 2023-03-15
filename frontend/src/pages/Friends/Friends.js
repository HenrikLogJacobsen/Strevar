import FindFriends from "../../components/FindFriends/FindFriends"
import MyFriends from "../../components/MyFriends/MyFriends"
import './friends.css'
import { useEffect, useState } from 'react'
import {useUserCtx} from "../../hooks/useUserCtx"
import { useUaCtx } from "../../hooks/useUaCtx"

//components

const Friends = () => {

    //TODO: hent ut alle du følger
    //TODO: hent ut alle brukere
    //vis alle unntatt de du følger


    const { user } = useUaCtx()

    const {users, dispatchUser} = useUserCtx()

    const [following, setFollowing] = useState('')




  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("api/users/")
      const json = await response.json()



      if (response.ok) {
        dispatchUser({type: "SET_USERS", payload: json})
        // const filteredFollowing = json.filter((following) => following.user_id === user.following);
        // dispatchFollowing({ type: 'FOLLOW_USER', payload: filteredFollowing });
        console.log("folger")
        console.log(user.following)
        // const followingz = user.following.filter((followUser) => followUser==users.uid)
        // const filteredExercises = json.filter((exercise) => exercise.user_id === user.uid);


        //test
        const followings = user.following
        const followingNames = followings.map(idToNameMapper)
        function idToNameMapper(id) {
          return json.filter((userFollow) => userFollow._id === id)[0].username
        }
        console.log(followingNames)
        setFollowing(followingNames)
        
      }
    }
    
    fetchUsers()
  }, [dispatchUser])



const handleClick = async (followingUserID) => {
    // Send a request to add the user's id to the current user's following array

    console.log(followingUserID)
    const selfUserID = user.uid;
    const followDetails = {selfUserID, followingUserID}
    const response = await fetch(`/api/users/newfollow`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(followDetails),
    });
    if (!response.ok) {
      throw new Error('Unable to follow user');
    }
  }

  

    return (
        <div className="friends">
            <h2>Finn venner</h2>
            <FindFriends user={user} users={users} handleClick={handleClick}/>
            <MyFriends following={following}/>

        </div>
    )
}

export default Friends