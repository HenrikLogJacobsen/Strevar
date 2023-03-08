

//components

const Friends = () => {

    //TODO: hent ut alle du følger
    //TODO: hent ut alle brukere
    //vis alle unntatt de du følger

    const dummyUsers = [
        "martine",
        "ola",
        "olav",
        "ane",
        "vebbis"
    ]

    

    return (
        <div className="friends">
            <h2>Finn venner</h2>
            <div className="findFriends">
            <h3>Finn venn med brukernavn</h3>
            <input name="q"></input>
            <button >Søk etter venn</button>
                {dummyUsers && dummyUsers.map(user => (
                    <div className="friendElement" key={user}>
                        <span className="friendInfo">{user}</span>
                        <span className="followButton">
                            <button className="button">Følg</button> 
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Friends