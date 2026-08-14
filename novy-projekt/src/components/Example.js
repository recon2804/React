import "./Example.css"
import {useState} from "react"

const Example = () => {
    const [title, setTitle] = useState("Můj první titulek")

    const buttonHandler = () => {
        setTitle("Nový titulek")
    }

    const buttonHandlerNd = () => {
        setTitle("Znovu změněný titulek")
    }

    return <div>
            <h2>{title}</h2>
            <button type="button" onClick={buttonHandler}>Změnit titulek</button>
            <button type="button" onClick={buttonHandlerNd}>Znovu změnit titulek</button>
            </div>
}


export default Example