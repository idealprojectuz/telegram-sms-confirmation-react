// import { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//       firstName: "Ishlavotti",
//     }
//   }
//   // clickHandler = () => {
//   //   this.setState(prevState => ({
//   //     counter: prevState.counter + 1
//   //   }))
//   // }
//   // minusHandler = () => {
//   //   this.setState(prevState => ({
//   //     counter: prevState.counter - 1
//   //   }))
//   // }
//   // reset = () => {
//   //   this.setState(prevState => ({
//   //     counter: prevState.counter = 1
//   //   }))
//   // }
//   firstNamefunc = e => {
//     this.setState({
//       firstName: e.target.value
//     })
//   }

//   render() {
//     return (

//       <div className="container-md">
//         <div className="col-md-5 mx-auto mt-5">
//           <h1>Sizning ismingiz  {this.state.firstName}? mi</h1>

//           {/* <div className="align-center">{this.state.counter}</div> */}
//           {/* <div className="btn-group d-flex "> */}
//           {/* <div className="btn btn-primary" onClick={this.clickHandler}>+</div>
//             <div className="btn btn-primary" onClick={this.minusHandler}>-</div>
//             <div className="btn btn-success" onClick={this.reset}>Reset</div> */}
//           <div className="form-group">
//             <label>Ismingizni kiriting</label>
//             <input type="text" onChange={this.firstNamefunc} className="form-control" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
