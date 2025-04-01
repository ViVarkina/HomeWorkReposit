type AffairPropsType = {
    affair: string // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
    id : number
}

export const Affair=({affair, deleteAffairCallback, id}:AffairPropsType)=> {
    const deleteCallback = () => {
        deleteAffairCallback(id)
    }

    return (
        <div>
            {affair}
            <button>change name</button>
            <button>change priority</button>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}


