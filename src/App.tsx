import React from "react";
import Webcam from "react-webcam";
import './App.css';

function App() {
    const WebcamComponent = () => <Webcam />;
  return (
    <>
        <header>
            <div className="container">
                <div className="header-bar">
                    <h1 className="logo">HEI</h1>
                    <ul className="slider-menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
            <h3>Presence en reconnaissance facial</h3>
        </header>

        <form method="POST">
        <input type="file" multiple />
            <p>Drag your files here or click in this area.</p>
            <button type="submit" className="bg-prim">Presence</button>
            <a href="" className="bg-red" id="reset">Réinitialiser</a>
    </form>
    </>
  );
}

export default App;
