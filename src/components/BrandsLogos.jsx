import { Container, Row, Col, Image } from 'react-bootstrap'
import brand1 from '../assets/brands/brand1.png'
import brand2 from '../assets/brands/brand2.png'
import brand3 from '../assets/brands/brand3.png'
import brand4 from '../assets/brands/brand4.png'

export default function BrandsLogos() {
  return (
     <section className="brands-logos py-5">
      <Container>
        <Row className='bg-light'>
          <h1 className='text-warning fw-bold'>Our Brands</h1>
          <hr />
          <p className='text-dark border-top pt-4'>Click on the brand logo you want to access</p>
        </Row>
        <Row className="justify-content-center align-items-center text-center g-4">
          
          <Col xs={6} md={3}>
            <Image src={brand1} alt="Brand 1" fluid className="brand-icon" />
          </Col>

          <Col xs={6} md={3}>
            <Image src={brand2} alt="Brand 2" fluid className="brand-icon" />
          </Col>

          <Col xs={6} md={3}>
            <Image src={brand3} alt="Brand 3" fluid className="brand-icon" />
          </Col>

          <Col xs={6} md={3}>
            <Image src={brand4} alt="Brand 4" fluid className="brand-icon" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}