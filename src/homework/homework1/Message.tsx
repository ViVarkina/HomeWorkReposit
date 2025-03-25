import css from './Message.module.css'

const clx=(arrString:string[], obj?:Record<string, boolean | undefined> ):string=>{
    console.log(arrString, obj, '1')
    for(const key in obj){
        console.log(obj.key, key, 'for')
        if(obj.key === true) {
            console.log(obj.key, key, 'if')
            const newArr = [...arrString, key]
            return  newArr.join(', ')
        }
        else {
            console.log(obj.key, key, 'else')
            return arrString.join(', ')
        }
    }
}
console.log(clx(['класс1', "класс2"], {'класс3':true, 'класс4':false, 'класс5':undefined}))
//  "1 2 3"

interface Props {
    avatar: string
    name: string
    message: string
    time: string
    incoming?: boolean;
}


export const Message=({avatar, name, message, time, incoming}: Props)=> {
    // const css = {divWrapper:'diwWrapper'};

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
