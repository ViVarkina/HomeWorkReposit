import css from './Message.module.css'

const clx=(arrSrting:string[], obj?:Record<string, boolean | undefined> ):string=>{
    console.log(arrSrting, obj)
    // методы
    return //  "1 2 3"
}
console.log(clx(['1', '2'], {'3':true, '4':false, '5':undefined}))
console.log(clx(['класс1', "класс2"], {'класс3':true, 'класс4':false, 'класс5':undefined}))
//  "1 2 3"

// 1 2 3

interface Props {
    avatar: string
    name: string
    message: string
    time: string
    incoming?: boolean;
}


function Message({avatar, name, message, time, incoming}: Props) {
    // const css = {divWrapper:'diwWrapper'};

    return (
        // <div className={`${css.divWrapper} ${incoming ? css.divWrapperRevert :''}`}>
        <div className={clx([css.divWrapper],{[css.divWrapperRevert]:incoming})}>
            <img src={avatar} className={css.imgSize}/>
            <div className={`${css.divCommonWrapper} ${incoming ? css.revertConteiner : ''}`}>
                <div className={`${css.divContsinerTraingle} ${incoming ? css.divContsinerTraingleRever : ''}`}></div>
                <div className={`${css.mainWrapper} ${incoming ? css.mainWrapperRevert : ''}`}>
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



export default Message
