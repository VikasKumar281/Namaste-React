// const heading=React.createElement("h1",{id:"heading"},"Hello World BY USING REACT!");

// console.log(heading);//REACT OBJECT

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// //CREATE NESTED ELEMENT IN REACT---------------------------------------->
// const parent=React.createElement(
//     "div",{id:"parent"},
//     React.createElement("div",
//         {id:"child"},
//         React.createElement("h1",{},
//             "I am an h1 tag"
//         )
//     )
// );
// console.log(parent);//REACT OBJECT
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
 

//CREATE SIBLINGS IN NESTED ELEMENT IN REACT---------------------------------------->
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"}, [
            React.createElement("h1",{},"I am an h1 tag"),
            React.createElement("h2",{},"I am an h2 tag"),
        ]),
    React.createElement("div",{id:"child"}, [
            React.createElement("h1",{},"I am an h1 tag"),
            React.createElement("h2",{},"I am an h2 tag"),
        ]),
);

console.log(parent);//REACT OBJECT
const root=ReactDOM.createRoot(document.getElementById("root"));
// const root=ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);