import css from './Message.module.css'

interface Props {
    avatar: string
    name: string
    message: string
    time: string
}


function Message({avatar, name, message, time}: Props) {
    return (
        <div className={css.divWrapper}>
            <img src={avatar} className={css.imgSize}/>
            <div className={css.mainContainer}>
                <span className={css.nameSize}>{name}</span>
                <p className={css.messageSize}>{message}</p>
                <div className={css.timeSize}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Message
