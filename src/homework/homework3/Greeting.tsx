import React, {useState} from 'react'
import uuid from "react-uuid"
import SuperInputText from "../homework4/common/c1-SuperInputText/SuperInputText.tsx";
import SuperButton from "../homework4/common/c2-SuperButton/SuperButton.tsx";

type GreetingPropsType = {
    setNameCallback: (e: string) => void
    addUser: (e: string) => void
    totalUsers: number
    addUserCallback: (name: string, id: string) => void
    error: string
}

const Greeting: React.FC<GreetingPropsType> = (
    {addUser, totalUsers, addUserCallback, error, setNameCallback}
) => {
    const [value, setValue] = useState<string>('')

    setNameCallback(value)

    return (
        <div>
            <SuperInputText onChange={(e) => {
                setValue((e.currentTarget.value).trim())
            }} error={error} value={value}/>
            <SuperButton onClick={() => {
                if (value !== '') {
                    addUser(value)
                    addUserCallback(uuid(), value)
                    setValue('')
                }

            }}>add
            </SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
