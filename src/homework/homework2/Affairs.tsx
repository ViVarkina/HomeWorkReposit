import {Affair} from './Affair'
import {AffairType, FilterType} from './Homework2.tsx'
import {Dispatch, SetStateAction} from "react";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id:number)=>void
}

export const Affairs=({deleteAffairCallback, data, setFilter}:AffairsPropsType)=> {
    const mappedAffairs = data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        return setFilter('all')
    } // need to fix
    const setHigh = () => {
        return setFilter('high')
    }
    const setMiddle = () => {
        return setFilter('middle')
    }
    const setLow = () => {
        return setFilter('low')
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
