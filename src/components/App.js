import React from "react";
import { Text, Hello } from "./Text";
//
const userLogin = false;
//
const names = ["apple", "haricots", "peras"];
//

const App = () => {
  //
  const NamesList = names.map((name, i) => <li hey={i}>{name}</li>);
  //
  //
  return (
    <React.Fragment>
      <h1>HELLO THIRD DAY </h1>
      <Text name={userLogin ? "mirtoooo" : "i dont know you"} age="12" />
      <ul>{NamesList}</ul>
      {/* 

                 </React.Fragment> is a better option for wrapping than DIV


                <Text name="carotte" age="25" />
                <Text name="fresa" />
                <Text name="cartoon" />

                <h3> {userLogin ? "hello moon" : "Login please"} </h3>
                */}
      {/*
                name and age are properties, properties you use with the props inside the Text.js
                
                
          */}
      <Hello />
    </React.Fragment>
  );
};

export default App;
