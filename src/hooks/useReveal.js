import { useEffect } from "react";

// Reveal scss effect to use on many sections 
export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver((entries) => {
                
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {

          setTimeout(() => {
            el.classList.add("active");
          }, 100); // Entra
        } else {
            el.classList.remove("active"); // la vuelve hacer
          }
      });
    }, {
      threshold: 0.3,
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}