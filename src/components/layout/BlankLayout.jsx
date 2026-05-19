import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../common/ScrollToTopButton.jsx";

export default function BlankLayout() {
  return (
    <>
      <Outlet />
      <ScrollToTopButton />
    </>
  );
}
