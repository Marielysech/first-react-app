import Button from './Button'
import React from 'react'

// const ShoppingList = ({item, color1, color2, text1, text2}) => {

//     let quantity = 0;
    
//     function increaseCounter(){
//         console.log(quantity)
//         return quantity = quantity +1
//     } ;
//     function decreaseCounter(){
//         return quantity = quantity -1
//     }

    function random() {
        return Math.random().toString()
    }

class ShoppingList extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
        }

    }


    increaseCounter () {
        this.setState({quantity: this.state.quantity +1});
    } ;


    decreaseCounter(){
        this.setState({quantity: this.state.quantity -1})
    }

    render () {
        return (
            <div>
                 <ul>
                 {this.props.item.map(item => 
                 <li key={random()}> 
                     {item}: {this.state.quantity} 
                     <Button color={this.props.color1} text={this.props.text1} event={() =>this.increaseCounter()}/>
                     <Button color={this.props.color2} text={this.props.text2} event={() =>this.decreaseCounter()}/> 
                 </li>)}
                 </ul>
             </div> 
         )
     
    }
}

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