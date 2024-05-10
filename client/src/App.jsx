import "./App.css";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import BookDetail from "./pages/BookDetail";
import AuthorDetail from "./pages/AuthorDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Books />} />
          <Route path="authors" element={<Authors />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="authors/:id" element={<AuthorDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
