import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/commons/header/Header";
import Main from "./pages/Main";
import Footer from "./components/commons/footer/Footer";
import AvailablePage from "./pages/AvailablePage";
import DetailAvailablePage from "./pages/DetailAvailablePage";
import AvailableFormPage from "./pages/AvailableFormPage";
import NotFound from "./components/commons/notFound/NotFound";
import AboutPage from "./pages/AboutPage";
import CaresheetPage from "./pages/CaresheetPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/caresheet" element={<CaresheetPage />} />
          <Route path="/list" element={<AvailablePage />} />
          <Route path="/list/:id" element={<DetailAvailablePage />} />
          <Route path="/list/form" element={<AvailableFormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
