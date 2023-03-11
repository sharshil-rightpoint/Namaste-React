//this is boiler plate code.
const heading = React.createElement("h1", {
    id:"heading",
}, "Namste React");

const heading2 = React.createElement("h1", {
   id: "heading2" 
}, "Namste everyone!")

const div = React.createElement("div", {
    id:"container"
}, [heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div)