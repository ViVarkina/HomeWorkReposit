import {useState} from "react";
import {AffairPriorityType} from "./Homework2.tsx";
import css from './Affairs.module.css'

type AffairPropsType = {
    affair: string
    deleteAffairCallback: (_id: number) => void
    id: number
    saveTitle: (params: { value: string, callback: () => void, id: number }) => void;
    savePriority: (params: { callback: () => void, id: number, value: AffairPriorityType }) => void;
    priority: AffairPriorityType
}

export const Affair = ({
                           affair,
                           deleteAffairCallback,
                           id,
                           saveTitle,
                           savePriority,
                           priority: defoldPriority
                       }: AffairPropsType) => {
    const [nameVisit, setNameVisit] = useState<boolean>(true);
    const [priorityVisit, setPriorityVisit] = useState<boolean>(true);
    const [value, setValue] = useState<string>(affair);
    const [priority, setPriority] = useState<AffairPriorityType>(defoldPriority)


    const closeInput = () => {
        setNameVisit(true);
    };
    const closeInputPriority = () => {
        setPriorityVisit(true);
    };

    const saveTitleInput = () => {
        saveTitle({value, callback: closeInput, id});
    };
    const savePriorityValue = () => {
        savePriority({value: priority, callback: closeInputPriority, id});
    };


    const deleteCallback = () => {
        deleteAffairCallback(id)
    }

    return (
        <div className={css.divMainWrapper}>
            <h2>{affair}</h2>
            <span>{defoldPriority}</span>
            {priorityVisit ? (
                <div>
                    <button onClick={() => (
                        setPriorityVisit(false)
                    )} className={css.changeBtn}>change priority
                    </button>
                </div>
            ) : (
                <div>
                    <select onChange={(event) => setPriority(event.target.value as AffairPriorityType)}
                            className={css.options} defaultValue={priority}>
                        <option value={AffairPriorityType.ALL}>{AffairPriorityType.ALL} </option>
                        <option value={AffairPriorityType.HIGH}>{AffairPriorityType.HIGH}</option>
                        <option value={AffairPriorityType.LOW}>{AffairPriorityType.LOW}</option>
                        <option value={AffairPriorityType.MIDDLE}>{AffairPriorityType.MIDDLE}</option>
                    </select>
                    <div className={css.divWrapperBtn}>
                        <button onClick={() => {
                            setPriorityVisit(true)
                            setPriority(defoldPriority)
                        }} className={css.primitiveBtnClose}>отменить
                        </button>
                        <button onClick={() => (
                            savePriorityValue()
                        )} className={css.primitiveBtnOpen}>готово
                        </button>
                    </div>
                </div>
            )}
            {nameVisit ? (
                <div>
                    <button onClick={() => (
                        setNameVisit(false)
                    )} className={css.changeBtn}>change name
                    </button>
                </div>

            ) : (
                <div>
                    <input className={css.inputSetting} placeholder={"изменить"} value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }}/>
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
            <button onClick={deleteCallback} className={css.btnDel}>X</button>
        </div>
    )
}


