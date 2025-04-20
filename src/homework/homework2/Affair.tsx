import {useState} from "react";
import {AffairPriorityType} from "./Homework2.tsx";
import css from './Affairs.module.css'

type AffairPropsType = {
    affair: string // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
    id : number
    saveTitle: (params:{value: string, callback: () => void, id:number}) => void;
    savePriority:(params:{callback: () => void, id:number, value: string}) => void;
}

export const Affair=({affair, deleteAffairCallback, id, saveTitle, savePriority}:AffairPropsType)=> {
    const [nameVisit, setNameVisit] = useState<boolean>(true);
    const [priorityVisit, setPriorityVisit] = useState<boolean>(true);
    const [value, setValue] = useState<string>(affair);

    const [priority, setPriority] = useState<string>(AffairPriorityType.ALL)
    console.log(priority)

    const closeInput = () => {
        setNameVisit(true);
    };
    const closeInputPriority = () => {
        setPriorityVisit(true);
    };

    const saveTitleInput = () => {
        saveTitle({value, callback:closeInput, id});
    };
    const savePriorityValue = () => {
        savePriority({priority, callback:closeInputPriority, id});
    };



    const deleteCallback = () => {
        deleteAffairCallback(id)
    }

    return (
        <div className={css.divMainWrapper}>
            {affair}
            {priorityVisit ?(
                <div>
                    <button onClick={() => (
                        setPriorityVisit(false)
                    )}>change priority
                    </button>
                </div>
            ) : (
                <div>
                    <select onChange={(event) => setPriority(event.target.value)}>
                        <option>{AffairPriorityType.HIGH}</option>
                        <option>{AffairPriorityType.LOW}</option>
                        <option>{AffairPriorityType.MIDDLE}</option>
                        <option>{AffairPriorityType.ALL}</option>
                    </select>
                    <button onClick={() => {
                        setPriorityVisit(true)
                        setPriority(priority)
                    }} className={css.primitiveBtnClose}>отменить
                    </button>
                    <button onClick={() => (
                        savePriorityValue()
                    )}>готово
                    </button>
                </div>
            )}
            {nameVisit ? (
                <div>
                    <button onClick={() => (
                        setNameVisit(false)
                    )}>change name
                    </button>
                </div>

            ) : (
                <div>
                <input placeholder={"изменить"} value={value} onChange={(e)=>{setValue(e.target.value)}}/>
                    <div className={css.divWrapperBtn}>
                        <button onClick={() => {
                            setNameVisit(true)
                            setValue(affair)
                        }} className={css.primitiveBtnClose}>отменить
                        </button>
                        <button onClick={() => (
                            saveTitleInput()
                        )} className={css.primitiveBtnOpen}>готово
                        </button>
                    </div>
                </div>

            )}
            <button onClick={deleteCallback} className={css.primitiveBtnClose}>X</button>
        </div>
    )
}


