
const Button = ({color, text, event}) => {

    return (
       <span>
            <button style={{backgroundColor: color}} onClick={event}>{text}</button>
      </span> 
    )
}


export default Button;

