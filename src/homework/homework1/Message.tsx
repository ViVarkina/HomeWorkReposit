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
            <div className={css.divCommonWrapper}>
                <div className={css.divContsinerTraingle}></div>
                <div className={css.mainWrapper}>
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
