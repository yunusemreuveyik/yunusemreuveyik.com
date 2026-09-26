// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/homePage/home";
import Contact from "./pages/contactPage/contactPage";
import MainLayout from "./layout/mainLayout";
import Rooms from "./pages/roomPage/roomPage";
import HotelPage from "./pages/hotelPage/hotelPage";

function App() {
  return (
    <BrowserRouter basename="/showcase-sites/palmarosa">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/rooms"
          element={
            <MainLayout>
              <Rooms />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <HotelPage />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
