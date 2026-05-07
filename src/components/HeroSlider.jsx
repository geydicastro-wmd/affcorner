import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import slide1 from "../assets/hero/slide1.jpg";
import slide2 from "../assets/hero/slide2.jpg";
import slide3 from "../assets/hero/slide3.jpg";
import slide4 from "../assets/hero/slide4.jpg";
import slide5 from "../assets/hero/slide5.jpg";

const slides = [
  {
    image: slide1,
    eyebrow: "Affiliate brand network",
    title: "Welcome to AffCorner",
    action: "Start Now",
  },
  {
    image: slide2,
    eyebrow: "Turn traffic into revenue",
    title: "Why Wait Any Longer?",
    action: "Join Now",
  },
  {
    image: slide3,
    eyebrow: "Products that convert",
    title: "Sportsbook, Casino, Racing",
    action: "View Products",
  },
  {
    image: slide4,
    eyebrow: "Commission growth",
    title: "Earn More As You Scale",
    action: "See Plans",
  },
  {
    image: slide5,
    eyebrow: "Built for partners",
    title: "Brands Your Players Trust",
    action: "Get Started",
  },
];

export default function HeroSlider() {
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
              <Button variant="warning" size="lg" className="hero-content__btn">
                {slide.action}
              </Button>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
