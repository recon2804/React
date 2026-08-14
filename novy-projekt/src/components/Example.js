import "./Example.css"
import {useState} from "react"

const Example = () => {
    const [title, setTitle] = useState("Můj první titulek")
    const [textButton, setTextButton] = useState ("Změnit text tlačítka")

    const buttonHandler = () => {
        setTitle("Nový titulek")
    }

    const buttonHandlerNd = () => {
        setTitle("Znovu změněný titulek")
    }

    const deleteTitle = () => {
        setTitle("")
    }

    const changeTextButton = () => {
        setTextButton("Text tlačítka byl změněn")
    }

    return <div className="text-button-changer">
            <h2>{title}</h2>
            <button type="button" onClick={buttonHandler}>Změnit titulek</button>
            <button type="button" onClick={buttonHandlerNd}>Znovu změnit titulek</button>
            <button type="button" onClick={deleteTitle}>Vymazat titulek</button>
            <button type="button" onClick={changeTextButton}>{textButton}</button>
            </div>
}


export default Example