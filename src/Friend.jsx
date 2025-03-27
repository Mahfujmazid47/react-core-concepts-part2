export default function Friend ({friend}){
    // console.log(friend)
    const {name,username,email}= friend;
    const {city} = friend.address
    return (
        <div className="userCard">
            <h2>name: {name}</h2>
            <h4>email: {email}</h4>
            <h4>username: {username}</h4>
            <h4>address: {city}</h4>
        </div>
    )
}