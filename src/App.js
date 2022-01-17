import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";
import Users from "./components/Users/Users";

const App = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => {
            setUsers([...value])
                setFilteredUsers ([...value])
        })
    },[])

    const getFilter = (data) => {
        let filtered = [...users]

        if (data.name){
            filtered = filtered.filter(user => user.name.includes(data.name))
        }
        if (data.username){
            filtered = filtered.filter(user => user.username.includes(data.username))
        }
        if (data.email){
            filtered = filtered.filter(user => user.email.includes(data.email))
        }
        setFilteredUsers(filtered)
    }
    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;