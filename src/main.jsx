import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "./scss/index.scss";

import Loading from "./components/common/loading.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

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
const BlankLayout = lazy(() => import("./components/layout/BlankLayout.jsx"));
const WelcomeSpecial = lazy(() => import("./pages/landing/WelcomeSpecial.jsx"));

const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="affiliates-brands" element={<Brands />} />
            <Route path="commissions" element={<Commissions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="frequentlyaskedquestions" element={<Frequentlyaskedquestions />} />
            <Route path="join" element={<Join />} />
            <Route path="register-now" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="terms-and-conditions" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="bogart-casino-affiliates" element={<BogartCasinoAff />} />
            <Route path="betmania-affiliates" element={<BetmaniaAff />} />
            <Route path="betphoenix-affiliates" element={<BetphoenixAff />} />
            <Route path="skybook-affiliates" element={<SkybookAff />} />
            <Route path="welcome-special" element={<WelcomeSpecial />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
