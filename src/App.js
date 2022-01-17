import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UsersDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {useState} from "react";
import {postService} from "./services/post.service";

const App = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user)
            setPosts([])
    }

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))
    }

    return (
        <div>
             <div  style={{display:'flex'}}>
                <Users getUser={getUser}/>
                 {user && <UserDetails user={user} getUserId={getUserId}/>}
             </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;