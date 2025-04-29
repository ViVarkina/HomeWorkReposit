import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./Homework3.tsx";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string, id:string)=>void // need to fix any
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>() // need to fix any

    const setNameCallback = (e: string) => { // need to fix any
        setName(e)
    }
    const addUser = (e:string) => {
        if(e != ''){
            alert(`Hello  ${e}!`)
        }
    }


    const totalUsers =  users.length
    console.log(users)

    return (
        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                // error={error}
                totalUsers={totalUsers}
                addUserCallback={addUserCallback}
            />
        </div>

    )
}

export default GreetingContainer
