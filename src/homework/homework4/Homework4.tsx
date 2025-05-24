import {useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from "./common/c2-SuperButton/SuperButton.tsx";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox.tsx";

function Homework4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)

    return (
        <div>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}

                />
                <SuperInputText
                    className={s.blue}

                />
                <SuperButton>
                    default
                </SuperButton>
                <SuperButton
                    red
                    onClick={showAlert}
                >
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>
                <SuperCheckbox checked={checked} />
            </div>
        </div>
    )
}

export default Homework4







