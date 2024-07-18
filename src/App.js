import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/commons/header/Header";
import AvailablePage from "./pages/AvailablePage";
import DetailAvailablePage from "./pages/DetailAvailablePage";
import AvailableFormPage from "./pages/AvailableFormPage";
import NotFound from "./components/commons/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list" element={<AvailablePage />} />
        <Route path="/list/:id" element={<DetailAvailablePage />} />
        <Route path="/list/form" element={<AvailableFormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
