import {Container} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { lazy, Suspense} from "react"
import ScrollToTopButton from "../common/ScrollToTopButton.jsx";
// Lazy components
const Footer = lazy(() => import("../../components/layout/Footer.jsx"));

export default function BlankLayout() {
  return (
    <>
    <div>
      <Outlet />
    </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
