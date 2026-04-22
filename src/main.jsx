import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./scss/index.scss";

import Loading from "./components/loading.jsx";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Brands = lazy(() => import("./pages/Brands"));
const Commissions = lazy(() => import("./pages/Commissions"));
const Contact = lazy(() => import("./pages/Contact"));
const Frequentlyaskedquestions = lazy(
  () => import("./pages/Frequentlyaskedquestions"),
);
const Join = lazy(() => import("./pages/Join"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="brands" element={<Brands />} />
              <Route path="commissions" element={<Commissions />} />
              <Route path="contact" element={<Contact />} />
              <Route path="frequentlyaskedquestions" element={<Frequentlyaskedquestions />} />
              <Route path="join" element={<Join />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
  </StrictMode>
);
