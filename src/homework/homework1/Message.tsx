import css from './Message.module.css'

export const clx=(arrString:string[], obj?:Record<string, boolean | undefined> ):string=>{
    if(!arrString){
        return ''
    }

    const newArr = [...arrString]

    for(const key in obj) {
        if (obj[key] === true) {
            newArr.push(key)
        }
    }
    return newArr.join(' ')
}


interface Props {
    avatar: string
    name: string
    message: string
    time: string
    incoming?: boolean;
}


export const Message=({avatar, name, message, time, incoming}: Props)=> {

    return (
        <div className={clx([css.divWrapper],{[css.divWrapperRevert]:incoming})}>
            <img src={avatar} className={css.imgSize}/>
            <div className={clx([css.divCommonWrapper],{[css.revertConteiner]:incoming})}>
                <div className={clx([css.divContsinerTraingle],{[css.divContsinerTraingleRever]:incoming})}></div>
                <div className={clx([css.mainWrapper],{[css.mainWrapperRevert]:incoming})}>
                    <div className={css.mainContainer}>
                        <span className={css.nameSize}>{name}</span>
                        <p>{message}</p>
                    </div>
                    <div className={css.timeSize}>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}
