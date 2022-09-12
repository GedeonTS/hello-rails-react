import React from "react";
import Greetings from "./Greetings";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (<>
        <Routes>
            <Route path="/" element={<Greetings />} />
        </Routes>
    </>);
}