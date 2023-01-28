import './Button.css';
function Button(props) {

    console.log(props)

    return (
        <button className="btn">{props.text}</button>
    )

}
export default Button

