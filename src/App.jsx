import { Routes, Route, Link } from "react-router";
import InputForm from "./components/InputForm";
import Details from "./components/Details";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/user/:username" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
