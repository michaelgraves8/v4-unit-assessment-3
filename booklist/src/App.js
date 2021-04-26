import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import Data from './data'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      books: Data,
      shelf: []
    }

  }

  addToShelf = () => {
    return Shelf.push(props.Booklist.title)
  }

  clearShelf = () => {
    return this.shelf.map.clear()
  }

  render() {
    return (
      <div>
        <Header />
        <BookList books={this.state.books} />
        <Shelf />
      </div>
    )
  }
}






// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
