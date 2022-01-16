/*
ReactDOM.render(<h1>Hello, everyone! I am here.</h1>,
    document.getElementById("root"));
*/

/*
ReactDOM.render(<h1>Hello, everyone! I am here.<p>I love React</p></h1>,
    document.getElementById("root"));
*/

// ReactDOM.render(<h1>I am Shahadat</h1>,document.querySelector("#root"))

/*
ReactDOM.render(<ul><li>BD</li><li>USA</li></ul>,
    document.getElementById("root"));
*/

/*
function MainContent(){
    return(<h1>Hello World!</h1>)
}

ReactDOM.render(
    <div>
        <MainContent/>
    </div>,
    document.getElementById("root"));
*/

/*
const h1 =document.createElement("h1")
h1.textContent="Hello BD"
h1.className="header"
document.getElementById("root").append(h1);
*/


const element = <h1 className>This is JSX</h1>
console.log(element)

ReactDOM.render(element,
    document.getElementById("root"));
