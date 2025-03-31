import {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'low' | 'high' | 'middle' // need to fix any
export type AffairType = {
    _id:number
    name:string
    priority: AffairPriorityType
}

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all'){
        return affairs
    }
    else if(filter === 'high'){
        return affairs.filter((e)=> e.priority == 'high')
    }
    else if(filter === 'low'){
        return affairs.filter((e)=> e.priority == 'low')
    }
    else if(filter === 'middle'){
        return affairs.filter((e)=> e.priority == 'middle')
    }
}
export const deleteAffair = (affairs: AffairType[], _id:number) : [] => { // need to fix any
    return affairs.map((e)=> e._id != _id)
}

export const Homework2=()=> {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

