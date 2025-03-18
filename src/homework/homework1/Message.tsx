import css from './Message.module.css'

interface Props {
    avatar: string
    name: string
    message: string
    time: string
    incoming?: boolean;
}

function Message({avatar, name, message, time, incoming}: Props) {
    return (
        <div className={`${css.divWrapper} ${incoming ? css.divWrapperRevert :''}`}>
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
