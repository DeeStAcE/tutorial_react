import React from "react";
import {createRoot} from "react-dom/client";
import CurrentDate from "./CurrentDate"

function App() {
    return (
        <>
            <CurrentDate/>
        </>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
