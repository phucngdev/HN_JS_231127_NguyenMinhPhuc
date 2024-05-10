import "./App.css";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Books from "./pages/Books";
import Authors from "./pages/Authors";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Books />} />
          <Route path="authors" element={<Authors />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
