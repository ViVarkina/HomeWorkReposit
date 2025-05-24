import GreetingContainer from './GreetingContainer'
import {useState} from "react";
import './HomeWork4.css'


export type UserType = {
    id: string
    name: string
}

const addUser = (id: string, name: string, arr: UserType[]): UserType[] => {
    return [...arr].concat({id, name})

}


export const Homework3 = () => {
    const [users, setUsers] = useState<UserType[]>([])
    const addUserCallback = (name: string, id: string) => {
        setUsers(addUser(id, name, users))
    }

    return (
        <div className={"wrapperContainer"}>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

