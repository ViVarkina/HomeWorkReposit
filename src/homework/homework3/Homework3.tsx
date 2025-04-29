import GreetingContainer from './GreetingContainer'
import {useState} from "react";

// types
export type UserType = {
    id: string
    name: string
}

const addUser =(id:string, name:string, arr:UserType[]):UserType[]=>{
    return [...arr].concat({id, name})

}

// уровень работы с глобальными данными
function Homework3() {
    const [users, setUsers] = useState<UserType[]>([])
    const addUserCallback = (name: string, id:string) => {
        setUsers(addUser(id, name, users))
    }

    return (
        <div>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default Homework3
