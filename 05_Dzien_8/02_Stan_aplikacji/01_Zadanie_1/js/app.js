import React from "react";
import {createRoot} from "react-dom/client";
import TextTyper from "./TextTyper"

function App() {
    return (
        <>
            <TextTyper text="Witaj!"/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
