class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render () {
    return (
      <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show Details' }
            </button>
            {this.state.visibility && (
              <div>
                <p>hello these are some details!!!!</p>
              </div>
            )}
     </div>
   );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const appRoot = document.getElementById('app')
// let visibility = false;
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show Details' }
//       </button>
//       {visibility && (
//         <div>
//         <p>hello these are some details!!!!</p>
//         </div>
//       )}
//     </div>
//   );
//     ReactDOM.render(template, appRoot);
// };
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };
// // toggleVisibility();
// render();
