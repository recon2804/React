import "./DecreaseButton.css"

const DecreaseButton = (props) => {
    return (
        <button onClick={props.decrease}>Odečíst -1 </button>
    )
}

export default DecreaseButton