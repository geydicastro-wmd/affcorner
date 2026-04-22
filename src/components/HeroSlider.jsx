import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import slide1 from '../assets/hero/slide1.jpg'
import slide2 from '../assets/hero/slide2.jpg'
import slide3 from '../assets/hero/slide3.jpg'
import slide4 from '../assets/hero/slide4.jpg'
import slide5 from '../assets/hero/slide5.jpg'

export default function HeroSlider() {
    return (
        <Carousel 
            fade
            indicators={false}
            controls={false}
            interval={4000}
            pause={false}
            className="hero-carousel">
            <Carousel.Item>
                <div className='hero-slide'
                    style={{backgroundImage: `url(${slide1})` }}
                >
                    <div className='overlay'></div>
                    <div className="hero-content">
                        <h2 className="mb-4">Welcome to AffCorner.com</h2>
                        <Button variant='warning' size='lg'>
                            Start
                        </Button>
                    </div>
                </div>

                
            </Carousel.Item>

            <Carousel.Item>
                <div className='hero-slide'
                    style={{backgroundImage: `url(${slide2})` }}
                >
                    <div className='overlay'></div>
                    <div className="hero-content">
                        <h2>Why Wait Any Longer</h2>
                        <p>Join Affcorner, And Start Making Money Today</p>
                        <Button variant='warning' size='lg'>
                            Join Now
                        </Button>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='hero-slide'
                    style={{backgroundImage: `url(${slide3})` }}
                >
                    <div className='overlay'></div>
                    <div className="hero-content">
                        <h2>Our Products Include</h2>
                        <p>• Sportsbook • Live Casino • Virtual Casino • Racebook</p>
                        <Button variant='warning' size='lg'>
                            Join Now
                        </Button>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='hero-slide'
                    style={{backgroundImage: `url(${slide4})` }}
                >
                    <div className='overlay'></div>
                    <div className="hero-content">
                        <h2>Why Wait Any Longer</h2>
                        <p>Join Affcorner, And Start Making Money Today</p>
                        <Button variant='warning' size='lg'>
                            Join Now
                        </Button>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='hero-slide'
                    style={{backgroundImage: `url(${slide5})` }}
                >
                    <div className='overlay'></div>
                    <div className="hero-content">
                        <h2>Our Products Include</h2>
                        <p>• Sportsbook • Live Casino • Virtual Casino • Racebook</p>
                        <Button variant='warning' size='lg'>
                            Join Now
                        </Button>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}