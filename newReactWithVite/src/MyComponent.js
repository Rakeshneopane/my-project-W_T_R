import React from "react";

const MyComponent = () => {
    return React.createElement(
        "form",
        {className: "my-component"},
        React.createElement("input",{ placeholder :"username"}),
        React.createElement("input", { placeholder :"password", type : "password"}),
        React.createElement("button", null, "submit")
    );
};

export default MyComponent;