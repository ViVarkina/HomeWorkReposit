import React, {useState} from 'react'
import s from './Greeting.module.css'
import uuid from "react-uuid"
import SuperInputText from "../homework4/common/c1-SuperInputText/SuperInputText.tsx";
import SuperButton from "../homework4/common/c2-SuperButton/SuperButton.tsx";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: string) => void // need to fix any
    addUser: (e: string) => void // need to fix any
    totalUsers: number // need to fix any
    addUserCallback: (name: string, id: string) => void
    error: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserCallback} // деструктуризация пропсов
) => {
    const [value, setValue] = useState<string>('')
    const inputClass = s.error // need to fix with (?:) функция для цвета

    return (
        <div>
            <SuperInputText value={name} onChange={(e) => {
                setValue(e.currentTarget.value)
                setNameCallback(value)
            }} className={inputClass}/>
            <span>{error}</span>
            <SuperButton onClick={() => {
                addUser(value)
                addUserCallback(uuid(), value)
                console.log(uuid(), value)
            }}>add
            </SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
