import React from 'react';
import ActionBox from "../containers/ActionBox";

export default class Todo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
    }
  }
  
  toggleActionBox = () => {
    this.setState({isEditMode: !this.state.isEditMode});
  }
  
  render() {
    const {text, status} = this.props.todo;
    const {isEditMode} = this.state;
    
    return (
      <span>
    <li className={`todoContainer`}>
      {!isEditMode ?
        (<span onClick={() => this.toggleActionBox()}>
          <h2>{text}</h2>
          <h4>{status}</h4>
        </span>) :
        <ActionBox todo={this.props.todo} toggleActionBox={this.toggleActionBox} onUpdate={this.props.onUpdate}/>
      }
    </li>
  </span>
    );
  }
}

//
//   render() {
//     debugger;
//     return (
//       <li>
//         {this.props.todo.text}
//       </li>
//     )
//   }
// }
