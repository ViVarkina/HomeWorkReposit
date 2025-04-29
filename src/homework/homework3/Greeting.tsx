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
    // error: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { addUser, totalUsers, addUserCallback} // деструктуризация пропсов
) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(true)

    const errfunc=()=>{
        if(value == ""){
            setError(false)
        }
        else{
            setError(true)
            addUser(value)
            addUserCallback(uuid(), value)
        }
    }

    const inputClass = `${!error ? '' : s.error}` // need to fix with (?:) функция для цвета



    return (
        <div>
            <SuperInputText onChange={(e)=>setValue(e.currentTarget.value)} className={inputClass} />
            {/*<span>{error}</span>*/}
            <SuperButton onClick={() => {
                errfunc()
            }}>add
            </SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
