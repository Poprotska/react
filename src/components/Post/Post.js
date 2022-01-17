const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>User ID: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;