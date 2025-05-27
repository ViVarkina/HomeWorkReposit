import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'
import {clx} from "../../../homework1/utils";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    errorCallback?: (e:string)=>void
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        onChange, onChangeText,
        onKeyDown, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {
    // пофиксить ошибки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(onChangeText){
            onChangeText(e.currentTarget.value)
        }
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if(onKeyDown){
            onKeyDown (e);
        }
        if (onEnter && e.key === 'Enter') {
            onEnter();
        }
    }

    // переписать на функцию
    const finalSpanClassName = clx([s.error], {[spanClassName ? spanClassName : '']: true})
    const finalInputClassName = clx([s.className, s.baseInput, className ? className : ''], {[error ? s.errorInput : s.trueInput]: true})



    return (
        <>
            <input
                type={'text'}
                onChange={onChangeCallback}
                //заменить key
                onKeyDown={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {/*Задавать текст из вне*/}
            {error && <span className={finalSpanClassName}>Пустое поле*</span>}
        </>
    )

}

export default SuperInputText
