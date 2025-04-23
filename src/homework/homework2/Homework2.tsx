import {useState} from 'react'
import Affairs from './Affairs'
import {deleteAffair, filterAffairs, renameName, renamePriority} from "./utils";

export enum AffairPriorityType {
    LOW = "low",
    HIGH = 'high',
    MIDDLE = 'middle',
    ALL = 'all'
}

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}


const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: AffairPriorityType.HIGH},
    {_id: 2, name: 'anime', priority: AffairPriorityType.LOW},
    {_id: 3, name: 'games', priority: AffairPriorityType.LOW},
    {_id: 4, name: 'work', priority: AffairPriorityType.HIGH},
    {_id: 5, name: 'html & css', priority: AffairPriorityType.MIDDLE},
]


export const Homework2 = () => {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<AffairPriorityType>(AffairPriorityType.ALL)


    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    const changeAffairsCallback = <T, >({changeAffairCallback, id, value, affairs, successCallback}: {
        changeAffairCallback: (affair: AffairType[], id: number, value: T) => AffairType[],
        id: number,
        value: T,
        affairs: AffairType[],
        successCallback: () => void
    }) => {
        setAffairs(changeAffairCallback(affairs, id, value))
        successCallback()
    }

    return (
        <div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                saveTitle={({callback, id, value}) => changeAffairsCallback<string>({
                    changeAffairCallback: renameName, id, value,
                    affairs, successCallback: callback
                })}
                savePriority={({callback, id, value}) => changeAffairsCallback<AffairPriorityType>({
                    changeAffairCallback: renamePriority, id, value,
                    affairs, successCallback: callback
                })}
            />
        </div>
    )
}

