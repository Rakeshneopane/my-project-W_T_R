import React from "react";
import ReactDOM from "react-dom/client"
import MyComponent from "./MyComponent";

const App = () => {
    return React.createElement(
        "div", null,
        React.createElement(MyComponent)
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));