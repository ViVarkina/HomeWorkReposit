import React, {useState} from 'react'
import uuid from "react-uuid"
import SuperInputText from "../homework4/common/c1-SuperInputText/SuperInputText.tsx";
import SuperButton from "../homework4/common/c2-SuperButton/SuperButton.tsx";
import s from './Greeting.module.css'

type GreetingPropsType = {
    setNameCallback: (e: string) => void
    addUser: (e: string) => void
    totalUsers: number
    addUserCallback: (name: string, id: string) => void
    name: string
}

const Greeting: React.FC<GreetingPropsType> = (
    {addUser, totalUsers, addUserCallback, name, setNameCallback}
) => {
    const [value, setValue] = useState<string>('')
    const [emptyField, setEmptyField] = useState<boolean>(false)

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (value !== '') {
                addUser(value)
                addUserCallback(uuid(), value)
                setValue('')
                setEmptyField(false)
            } else {
                setEmptyField(true)
            }

        }
    };

    const focusInput = () => {
        setEmptyField(false)
    }

    setNameCallback(value)

    return (
        <div className={s.divContainer}>
            <div className={s.mainContain}>
                <SuperInputText onChange={(e) => {
                    setValue((e.currentTarget.value).trim())
                }} error={emptyField && name == '' ? "error" : ''} value={value} className={s.baseSize}
                                placeholder={'Введите имя'} onKeyDown={handleKeyPress} onFocus={focusInput}/>
                <SuperButton onClick={() => {
                    if (value !== '') {
                        addUser(value)
                        addUserCallback(uuid(), value)
                        setValue('')
                        setEmptyField(false)
                    } else {
                        setEmptyField(true)
                    }

                }} className={s.baseSize}>add
                </SuperButton>
            </div>
            <span className={s.styleTotal}>{totalUsers} пользователей в массиве</span>
        </div>
    )
}

export default Greeting
