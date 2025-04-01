import {Affair} from './Affair'
import {AffairPriorityType, AffairType} from './Homework2.tsx'
import {Dispatch, SetStateAction} from "react";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<AffairPriorityType>>
    deleteAffairCallback: (_id:number)=>void
}

export const Affairs=({deleteAffairCallback, data, setFilter}:AffairsPropsType)=> {
    const mappedAffairs = data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            deleteAffairCallback={deleteAffairCallback}
            id={a._id}
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

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
