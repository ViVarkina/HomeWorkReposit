import {AffairPriorityType, AffairType} from "../Homework2.tsx";


export const filterAffairs = (affairs: AffairType[], filter: AffairPriorityType): AffairType[] => { // need to fix any
    const filterAffairs = [...affairs]
    switch (filter) {
        case AffairPriorityType.HIGH:
            return filterAffairs.filter((e) => e.priority == AffairPriorityType.HIGH);
        case AffairPriorityType.MIDDLE:
            return filterAffairs.filter((e) => e.priority == AffairPriorityType.MIDDLE);
        case AffairPriorityType.LOW:
            return filterAffairs.filter((e) => e.priority == AffairPriorityType.LOW)
        default:
            return filterAffairs
    }
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return [...affairs].filter((e) => e._id != _id)
}

export const renameName = (affairs: AffairType[], id:number, value:string):AffairType[] => {
    return [...affairs].map((e) => e._id === id ? {...e, name:value} : e)
}

export const renamePriority = (affairs: AffairType[], id:number, value:AffairPriorityType):AffairType[] => {
    return [...affairs].map((e) => e._id === id ? {...e, priority:value} : e)
}
