import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        checked,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    // ${className ? className : ''
    const finalInputClassName = `${s.checkbox}`
    const fakeCheckedBox = `${s.fakeCheckedBox}`

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
        <label className={s.container}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            <span className={fakeCheckedBox}></span>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}

export default SuperCheckbox
