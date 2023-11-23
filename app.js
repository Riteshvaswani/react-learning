import React from "react";
import ReactDOM from "react-dom";


const headingReact = React.createElement("h1", {id: "heading"}, "Hello World from ReactJS!!");
console.log(headingReact);

const headingJSX = (<h1>
    Hellow World from JSX
    </h1>);
console.log(headingJSX);

const Title = function() {
    return (
        <h1>This is title Component</h1>
    );
}

const FunctionalComponent = () => <h1>Inside Functional Component</h1>
console.log(FunctionalComponent())

const FunctionalComponentBraces = () => {
    return (<><FunctionalComponent />
        <Title />
        <h2>Inside Functional Component Braces</h2></>)
}
console.log(FunctionalComponentBraces())

const root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(headingReact);
root.render(<FunctionalComponentBraces />);