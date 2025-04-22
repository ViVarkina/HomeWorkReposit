import {Affair} from './Affair'
import {AffairPriorityType, AffairType} from './Homework2.tsx'
import {Dispatch, SetStateAction} from "react";
import css from './Affairs.module.css'


type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<AffairPriorityType>>
    deleteAffairCallback: (_id:number)=>void
    saveTitle: (params:{value: string, callback: () => void, id:number}) => void;
    savePriority:(params:{callback: () => void, id:number, value: AffairPriorityType}) => void;
}

export const Affairs=({deleteAffairCallback, data, setFilter, saveTitle, savePriority}:AffairsPropsType)=> {
    const mappedAffairs = data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={deleteAffairCallback}
            id={a._id}
            saveTitle={saveTitle}
            savePriority={savePriority}
        />
    ))

    const setAll = () => {
        return setFilter(AffairPriorityType.ALL)
    } // need to fix
    const setHigh = () => {
        return setFilter(AffairPriorityType.HIGH)
    }
    const setMiddle = () => {
        return setFilter(AffairPriorityType.MIDDLE)
    }
    const setLow = () => {
        return setFilter(AffairPriorityType.LOW)
    }

    return (
        <div >

            <div>{mappedAffairs}</div>
            <div className={css.divContainerFilter}>
                <button onClick={setAll} className={css.filterBtn}>All</button>
                <button onClick={setHigh} className={css.filterBtn}>High</button>
                <button onClick={setMiddle} className={css.filterBtn}>Middle</button>
                <button onClick={setLow} className={css.filterBtn}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
