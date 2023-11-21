/**
 *  
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *  </div>
 * </div>
 * 
 * 
 */



const headingReact = React.createElement("h1", {id: "heading"}, "Hello World from ReactJS!");
const anotherHeading = React.createElement("h2", {id: "heading"}, "Hello World from ReactJS in h2!");

const child = React.createElement("div", {id: "child"}, [headingReact, anotherHeading])
const parent = React.createElement("div", {id: "parent"}, child)

const root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(parent);
console.log(parent);