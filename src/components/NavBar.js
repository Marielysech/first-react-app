
const navBar = ({navInfo}) => {
let {section1, name1, section2, name2, section3, name3} = navInfo

    return (
       <div className="navBar">
            <span>  <a href={section1}>{name1}</a> </span>
            <span> <a href={section2}>{name2}</a> </span>
            <span> <a href={section3}>{name3}</a> </span>
        </div> 
    )
}


export default navBar;