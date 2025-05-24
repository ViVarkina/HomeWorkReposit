import {Affair} from './Affair'
import {AffairPriorityType, AffairType} from './Homework2.tsx'
import {Dispatch, SetStateAction} from "react";
import css from './Affairs.module.css'
import SuperButton from "../homework4/common/c2-SuperButton/SuperButton.tsx";


type AffairsPropsType = {
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<AffairPriorityType>>
    deleteAffairCallback: (_id: number) => void
    saveTitle: (params: { value: string, callback: () => void, id: number }) => void;
    savePriority: (params: { callback: () => void, id: number, value: AffairPriorityType }) => void;
}

export const Affairs = ({deleteAffairCallback, data, setFilter, saveTitle, savePriority}: AffairsPropsType) => {
    const mappedAffairs = data.map((a) => (
        <Affair
            key={a._id}
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
    }
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
        <div>
            <div>{mappedAffairs}</div>
            <div className={css.divContainerFilter}>
                <SuperButton onClick={setAll} >All</SuperButton>
                <SuperButton onClick={setHigh} >High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow} >Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
