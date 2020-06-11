import React from "react";

// const Text = (props) => {
//   return (
//     <React.Fragment>
//       <h5>
//         Hi this is Text {props.name} {props.age}
//       </h5>
//     </React.Fragment>
//   );
// };

// export default Text;

class Text extends React.Component {
  render() {
    return (
      <h1>
        Hey I am {this.props.name}, and I am {this.props.age}
      </h1>
    );
  }
}

//
class Hello extends React.Component {
  render() {
    return <h1>second component</h1>;
  }
}

// several exports, you have to add this to the App.js : import { Text, Hello } from "./Text";
// otherwise it will make an error.
export { Text, Hello };
// individual exports
// export default Text;
