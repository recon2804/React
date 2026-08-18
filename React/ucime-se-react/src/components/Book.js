import "./Book.css"
import OrderButton from "./OrderButton"

const Book  = (props) => {
    return <div className="one-book">
        <img src={props.myimage}></img>
        <h2 className="main-heading">{props.mytitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus accusantium illo vitae eligendi fugit id fuga officia repudiandae! Aliquid atque omnis odit corrupti consectetur accusantium dignissimos explicabo accusamus quis.</p>
        <OrderButton/>
        </div>
}

export default Book