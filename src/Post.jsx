export default function Post ({post}){
    const {title} = post;
    // console.log(title)
    return (
        <div className="userCard">
            <h3>Title: {title}</h3>
        </div>
    )
}