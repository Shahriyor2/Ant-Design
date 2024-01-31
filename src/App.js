import { Osnova } from "./pages/Osnova";
import { Route, Routes } from "react-router";
import { Slide } from "./components/Slide";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route />
        <Route path="/" element={<Osnova />} />
        <Route path="/nav1" element={<Slide />} />
      </Routes>
    </div>
  );
};
