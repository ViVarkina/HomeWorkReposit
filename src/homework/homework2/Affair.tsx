
type AffairPropsType = {
    affair: string // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

export const Affair=({affair}:AffairPropsType)=> {
    const deleteCallback = () => {}

    return (
        <div>
            {affair}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}


