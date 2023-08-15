// const myHeading= React.createElement("h1",{id:"heading"},"Hello World from React!");
// console.log(myHeading)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am a H1 tag"),
    React.createElement("h2", { id: "headin2" }, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading3" }, "I am a H1 3 tag"),
    React.createElement("h2", { id: "headin4" }, "I am H2 3"),
  ]),
]);
const roott = ReactDOM.createRoot(document.getElementById("roott"));
roott.render(parent);
console.log(roott);
