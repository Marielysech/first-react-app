
const Button = ({color, text, handler}) => {

    return (
       <span>
            <button style={{backgroundColor: color}} onClick={handler}>{text}</button>
      </span> 
    )
}


export default Button;

