import React from "react";
import { createRoot } from "react-dom/client";
import Numbers from "./Numbers"

function App() {
    return (
        <>
            <Numbers/>
        </>
    )
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
