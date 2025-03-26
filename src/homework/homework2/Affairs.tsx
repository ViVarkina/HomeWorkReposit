import Affair from './Affair'
import {AffairType, FilterType} from './Homework2.tsx'
import {Dispatch, SetStateAction} from "react";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {} // need to fix
    const setHigh = () => {}
    const setMiddle = () => {}
    const setLow = () => {}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
