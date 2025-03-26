type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div>
            {props.affair}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
