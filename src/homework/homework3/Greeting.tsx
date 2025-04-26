import React, {useState} from 'react'
import s from './Greeting.module.css'
import uuid from "react-uuid"

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: (e: string) => void // need to fix any
    error: boolean
    totalUsers: number // need to fix any
    addUserCallback: (name: string, id: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserCallback} // деструктуризация пропсов
) => {
    const [value, setValue] = useState<string>('')
    const inputClass = s.error // need to fix with (?:) функция для цвета

    return (
        <div>
            <input value={name} onChange={(e) => {
                setValue(e.target.value)
                setNameCallback(value)
            }} className={inputClass}/>
            <span>{error}</span>
            <button onClick={() => {
                addUser(value)
                addUserCallback(uuid(), value)
            }}>add
            </button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
