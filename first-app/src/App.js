import React from "react";
let internal={
  "backgroundColor":"red",
  "fontSize":"30px"
}
function App() {
  return (<>
    <h3 style={
      {
        backgroundColor: "pink",
        color: "red",
        fontSize: "25px"
      }
    }>
      {/* This is my First React App */}
      Here is Inline CSS
    </h3>
    <div>
      <strong style={internal}>
        Here is Internal CSS
      </strong>
    </div>
  </>)
}
export default App;