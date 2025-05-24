import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children,
        checked,
        ...restProps
    }
) => {


    // ${className ? className : ''
    const finalInputClassName = `${s.checkbox}`
    const fakeCheckedBox = `${s.fakeCheckedBox}`

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
        <label className={s.container}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            <span className={fakeCheckedBox}></span>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
}

export default SuperCheckbox
