import React from "react";
import logo from "./logo192.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      Hello
      <footer className="footer">
        Made With <span role="img" aria-label="heart emoji">❤️</span> and
        <span><img src={logo} className="App-logo" alt="logo" /></span>
        By <a href="https://twitter.com/RagoneMatthew" target="_">This Guy</a>
      </footer>
    </div>
  );
}

export default App;
