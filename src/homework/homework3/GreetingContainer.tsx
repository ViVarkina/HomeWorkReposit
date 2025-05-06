import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./Homework3.tsx";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string, id: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const error = name ? '' : 'error'

    const setNameCallback = (e: string) => {
        setName(e)
    }
    const addUser = (e: string) => {
        if (e != '') {
            alert(`Hello  ${e}!`)
        }
    }

    const totalUsers = users.length

    return (
        <div>
            <Greeting
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
                addUserCallback={addUserCallback}
            />
        </div>

    )
}

export default GreetingContainer
