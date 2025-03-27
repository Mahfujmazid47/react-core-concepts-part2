import { use } from "react"

export default function  Users({fetchUsers}){
    const users = use(fetchUsers);
    console.log(users)
    return (
        <div className="userCard">
            <h3>users: {users.length}</h3>
        </div>
    )
}