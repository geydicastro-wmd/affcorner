import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "./scss/index.scss";

import Loading from "./components/common/loading.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import AffiliatesBrands from "./pages/AffiliatesBrands";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Brands = lazy(() => import("./pages/AffiliatesBrands"));
const Commissions = lazy(() => import("./pages/Commissions"));
const Contact = lazy(() => import("./pages/Contact"));
const Frequentlyaskedquestions = lazy(
  () => import("./pages/Frequentlyaskedquestions"),
);
const Join = lazy(() => import("./pages/Join"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const BogartCasinoAff = lazy(() => import("./pages/BogartCasinoAff"));
const BetmaniaAff = lazy(() => import("./pages/BetmaniaAff"));
const BetphoenixAff = lazy(() => import("./pages/BetphoenixAff"));
const SkybookAff = lazy(() => import("./pages/SkybookAff"));

const Terms = lazy(() => import("./pages/Terms"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="affiliates-brands" element={<AffiliatesBrands />} />
              <Route path="commissions" element={<Commissions />} />
              <Route path="contact" element={<Contact />} />
              <Route path="frequentlyaskedquestions" element={<Frequentlyaskedquestions />} />
              <Route path="join" element={<Join />} />
              <Route path="register-now" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="terms-and-conditions" element={<Terms />} />
            </Route>
            <Route path="bogart-casino-affiliates" element={<BogartCasinoAff />} />
            <Route path="betmania-affiliates" element={<BetmaniaAff />} />
            <Route path="betphoenix-affiliates" element={<BetphoenixAff />} />
            <Route path="skybook-affiliates" element={<SkybookAff />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  </StrictMode>
);
