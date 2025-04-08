import {useState} from "react";

type AffairPropsType = {
    affair: string // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
    id : number
    saveTitle: (params:{value: string, callback: () => void, id:number}) => void;

}

export const Affair=({affair, deleteAffairCallback, id, saveTitle}:AffairPropsType)=> {
    const [nameVisit, setNameVisit] = useState<boolean>(true);
    const [value, setValue] = useState<string>(affair);

    const closeInput = () => {
        setNameVisit(true);
    };

    const saveTitleInput = () => {
        saveTitle({value, callback:closeInput, id});
    };



    const deleteCallback = () => {
        deleteAffairCallback(id)
    }

    return (
        <div>
            {affair}
            {nameVisit ? (
                <div>
                    <button onClick={()=>(
                        setNameVisit(false)
                    )}>change name</button>
                </div>

            ):(
                <div>
                    <input placeholder={"изменить"} value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                    <button onClick={()=>{
                        setNameVisit(true)
                        setValue(affair)
                    }}>отменить</button>
                    <button onClick={()=>(
                        saveTitleInput()
                    )}>готово</button>
                </div>

            )}
            <button>change priority</button>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}


