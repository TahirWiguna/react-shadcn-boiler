import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Routes>
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin">
                <Route path="dashboard" element={<Layout />} />
            </Route>
        </Routes>
    );
}

export default App;
