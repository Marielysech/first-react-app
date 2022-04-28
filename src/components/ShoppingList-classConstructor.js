import Button from './Button'
import React, {useState} from 'react'

const ShoppingList = ({item, color1, color2, text1, text2}) => {

function random() {
    return Math.random().toString()
}

const [quantity, setQuantity] = useState(0);
const [itemsList, setItemsList] = useState(item)
const [value, setValue] = useState("")
const [isChecked, setIsChecked] = useState(false)

function increaseItemQty (itemValue) {
    const newArr = [...itemsList]
    const index = newArr.findIndex(elem => elem.item === itemValue)
    newArr[index].quantity++
    setQuantity(newArr)
}

function decreaseItemQty (itemValue) {
    const newArr = [...itemsList]
    const index = newArr.findIndex(elem => elem.item === itemValue)
    newArr[index].quantity--
    setQuantity(newArr)
}

if (!(item.length)) {
    return (<><h2>The Shopping List is empty !</h2></>)
}
// class ShoppingList extends React.Component {
//         constructor(props) {
//         super(props)
//         this.state = {
//             quantity: 0,
//         }

//     }


//     increaseCounter () {
//         this.setState({quantity: this.state.quantity +1});
//     } ;


//     decreaseCounter(){
//         this.setState({quantity: this.state.quantity -1})
//     }
//     render () {


const handler = (event) => {
    event.preventDefault()
   let doesExist = itemsList.some(item => item.item === value)
   let newItem = {item:value, quantity:0, isChecked: isChecked}

    if(!doesExist) {
    value && setItemsList([...itemsList, newItem])
    setValue("")
    setIsChecked(false)
    } setValue("");

}

const deleteItem = (value) => {
    const newList = itemsList.filter(item => item.item !== value)
    setItemsList(newList)
}

const chooseClass = (name) => {
    let className 
    (name === value) ? (className='existingItem') : (className='')
    return className
} 

    return (
                <div>
                <form>
                    <input
                    placeholder="Add items here"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    ></input>
                    <p>{value}</p>
                    <button onClick={handler}>add</button>
                    <label>
                    Urgent
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    ></input>
                    </label>
                </form>
                <ul>
                    {itemsList.map((item, index) =>
                    item.item === "banana" ? (
                        <h2>I dont like banana</h2>
                    ) : (
                        <li className={chooseClass(item.item)} key={random()}>
                        {item.item}: {item.quantity} {item.isChecked && <em>URGENT</em>}
                        <Button
                            color={color1}
                            text={text1}
                            handler={() => increaseItemQty(item.item)}
                        />
                        {item.quantity > 0 && (
                            <Button
                            color={color2}
                            text={text2}
                            handler={() => decreaseItemQty(item.item)}
                            />
                        )}
                        <Button
                            color="yellow"
                            text="delete item"
                            handler={() => deleteItem(item.item)}
                        />
                        </li>
                    )
                    )}
                </ul>
                </div>
    );
    };

    // function tick() {
    //     date = new Date().
    // }

//     setInterval(increaseCounter, 1000)

//     return (
//        <div>
//             <ul>
//             {item.map(item => 
//             <li key={random()}> 
//                 {item}: {quantity} 
//                 <Button color={color1} text={text1} event={increaseCounter}/>
//                 <Button color={color2} text={text2} event={() => {quantity = quantity -1} }/> 
//             </li>)}
//             </ul>
//         </div> 
//     )
// }


export default ShoppingList;

//Create a React application that displays three items of a shopping list; e.g.: butter, milk, sugar. You can use any HTML tag for the items, and there must be a ShoppingList component