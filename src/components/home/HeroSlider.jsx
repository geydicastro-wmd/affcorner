import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import slide1 from "../../assets/hero/slide1.jpg";
import slide2 from "../../assets/hero/slide2.jpg";
import slide3 from "../../assets/hero/slide3.jpg";
import slide4 from "../../assets/hero/slide4.jpg";
import slide5 from "../../assets/hero/slide5.jpg";

const fallbackSlides = [
  {
    image: slide1,
    eyebrow: "Affiliate brand network",
    title: "Welcome to AffCorner",
    link: "/register-now",
    linkText: "JOIN NOW!",
  },
  {
    image: slide2,
    eyebrow: "Turn traffic into revenue",
    title: "Why Wait Any Longer?",
    link: "/register-now",
    linkText: "JOIN NOW!",
  },
  {
    image: slide3,
    eyebrow: "Products that convert",
    title: "Sportsbook, Casino, Racing",
    link: "/register-now",
    linkText: "JOIN NOW!",
  },
  {
    image: slide4,
    eyebrow: "Commission growth",
    title: "Earn More As You Scale",
    link: "/register-now",
    linkText: "JOIN NOW!",
  },
  {
    image: slide5,
    eyebrow: "Built for partners",
    title: "Brands Your Players Trust",
    link: "/register-now",
    linkText: "JOIN NOW!",
  },
];

function getImageUrl(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (Array.isArray(image)) return image[0]?.url || "";
  return image.url || "";
}

function normalizeLink(link) {
  if (!link) return "/register-now";
  if (/^https?:\/\//i.test(link)) return link;
  return link.startsWith("/") ? link : `/${link}`;
}

function normalizeSlides(items) {
  return items
    .filter((item) => item?.is_enabled && item?.status === "active")
    .sort((a, b) => (a.position || 0) - (b.position || 0))
    .map((item) => ({
      image: getImageUrl(item.image) || slide1,
      eyebrow: item.description || "Affiliate brand network",
      title: item.name || item.imageAltText || "Welcome to AffCorner",
      link: normalizeLink(item.link),
      linkText: item.linkText || "JOIN NOW!",
    }));
}

export default function HeroSlider({ slidesData = [], loading = false }) {
  const apiSlides = normalizeSlides(slidesData || []);
  const slides = loading && !apiSlides.length
    ? []
    : apiSlides.length
      ? apiSlides
      : fallbackSlides;

  return (
    <Carousel
      fade
      indicators={false}
      controls={false}
      interval={5000}
      pause={false}
      className="hero-carousel"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={slide.title}>
          <div className={`hero-slide hero-slide--${index % 3}`}>
            <div
              className="hero-slide__media"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="overlay" />
            <div className="hero-content">
              <p className="hero-content__eyebrow">{slide.eyebrow}</p>
              <h2>{slide.title}</h2>
              {/^https?:\/\//i.test(slide.link) ? (
                <Button
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="warning"
                  size="lg"
                  className="hero-content__btn"
                >
                  {slide.linkText}
                </Button>
              ) : (
                <Button
                  as={Link}
                  to={slide.link}
                  variant="warning"
                  size="lg"
                  className="hero-content__btn"
                >
                  {slide.linkText}
                </Button>
              )}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
