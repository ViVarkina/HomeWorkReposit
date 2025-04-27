import {useState} from "react";
import {AffairPriorityType} from "./Homework2.tsx";
import css from './Affairs.module.css'
import SuperButton from "../homework4/common/c2-SuperButton/SuperButton.tsx";
import SuperInputText from "../homework4/common/c1-SuperInputText/SuperInputText.tsx";

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
                    <SuperButton onClick={() => (
                        setPriorityVisit(false)
                    )} >change priority
                    </SuperButton>
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
                        <SuperButton onClick={() => {
                            setPriorityVisit(true)
                            setPriority(defoldPriority)
                        }} className={css.primitiveBtnClose}>отменить
                        </SuperButton>
                        <SuperButton onClick={() => (
                            savePriorityValue()
                        )} className={css.primitiveBtnOpen}>готово
                        </SuperButton>
                    </div>
                </div>
            )}
            {nameVisit ? (
                <div>
                    <SuperButton onClick={() => (
                        setNameVisit(false)
                    )} >change name
                    </SuperButton>
                </div>

            ) : (
                <div>
                    <SuperInputText  placeholder={"изменить"} value={value} onChange={(e) => {
                        setValue(e.target.value)
                    }}/>
                    <div className={css.divWrapperBtn}>
                        <SuperButton onClick={() => {
                            setNameVisit(true)
                            setValue(affair)
                        }} className={css.primitiveBtnClose}>отменить
                        </SuperButton>
                        <SuperButton onClick={() => (
                            saveTitleInput()
                        )} className={css.primitiveBtnOpen}>готово
                        </SuperButton>
                    </div>
                </div>

            )}
            <SuperButton onClick={deleteCallback} className={css.btnDel}>X</SuperButton>
        </div>
    )
}


