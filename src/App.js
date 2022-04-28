import logo from './logo.svg';
import './App.css';
import React from 'react'
import ShoppingList from './components/ShoppingList-classConstructor';
import Header from './components/Header';
import FooterTest from './components/Footer';
import NavBar from './components/NavBar';
import "./index.css"


// /* ----------with class constructor-------------*/
// class App extends React.Component{
//   constructor() {
//     super()
//     this.state = {
//         item: ["butter", "milk", "banana", "tatatata"],
//         navData: {
//           section1: "https://google.fr",
//           name1: "Home",
//           section2: "",
//           name2: "Shopping List",
//           section3: "",
//           name3: "Contact"
//                  }
//                }
//             }
  
//     render () {
//       return (
//         <>
//         <NavBar navInfo={this.state.navData}/>
//         <Header title="This is your shopping list"/>
//         <main>
//           <ShoppingList item={this.state.item} color1="green" color2="red" text1="add" text2="decrease"/>
//         </main>
//         <FooterTest />
//       </>
//        )
//   }

// }

/* -------- with a function ---------*/

function App() {
  let item = [{item:"mango", quantity:0},{item:"apple", quantity:0}, {item:"potatoes", quantity:0},{item:"kiwi", quantity:0}]

  // let item = []

  let navData = {
    section1: "https://google.fr",
    name1: "Home",
    section2: "",
    name2: "Shopping List",
    section3: "",
    name3: "Contact"
  }


  return (
    <>
      <NavBar navInfo={navData}/>
      <Header title="This is your shopping list"/>
      <main>
        <ShoppingList item={item} color1="green" color2="red" text1="increase" text2="decrease"/>
      </main>
      {/* <FooterTest /> */}
    </>
  );
}

export default App;
