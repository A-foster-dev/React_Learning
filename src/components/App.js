//ES6
import React, {useState} from "react" // equivalent to React = require("react");

import Header from './Header'
import Card from './Card'
import Footer from './Footer'

import contacts from '../contacts'


function createCard(contact){
  return (
    <Card 
      key = {contact.key} //*
      name= {contact.name}
      number= {contact.number}
      email= {contact.email}
      
    />
  );
}
// ES6 helpful
// map() iterates, filter() validates, reduce() trimes
// arros functions ()=>{}   is the same as: function(){}

function App() {

  var [method1, value] = useState(true);

  function changeMethod(){
    value(!method1);
  }

  return (
    <div className="App" >
      
      <Header/>

      <button onClick={changeMethod}>Press Me</button>
      { method1 ?     <h1>Method 1</h1>:   <h1>Method 2</h1>   }

      {
        method1 ?      
        <div>
          <Card name="Andrew" phone="1-800-0000" email="afoster@cistel.com"/>
        </div> 
        :      
        <div>
          {contacts.map(createCard)} 
        </div>
      }

      <Footer/>

    </div>
  );
}

export default App;