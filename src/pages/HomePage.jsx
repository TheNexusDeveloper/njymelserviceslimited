import React from 'react'
import Showcase from '../assets/showcase.jpg'
import { Row, Col, Container, Button } from 'react-bootstrap'
// import { Link } from 'react-router'

function HomePage() {
  return (
    <div>
        {/* Showcase Section of the HomePage */}
        <div className="showcase">
            <img src={Showcase} alt="Showcase-image" className="showcase-img" />
            <div className="overlay" />
            <div className='showcase-content'>
            <Container>
                <Row>
                    <Col className='' lg={12} md={12} sm={12} xs={12}>
                        <h1>Let Us Make Your Home or Office Shine</h1> 
                        <h2>Reliable Cleaning Solutions for every space</h2>

                        <p className='mt-3'>
                            Based in the heart of Lagos, 
                            we provide top-quality cleaning services for homes and offices across the city. 
                            Our dedicated team uses safe, effective methods to ensure every space sparkles—giving you more time to focus on what matters most. 
                            Whether you need a one-time deep clean or regular maintenance, trust us to deliver reliable, professional results with a personal touch.
                        </p>
                    </Col>

                    <Col className='mt-3' lg={12} md={12} sm={12} xs={12}>
                        <Button  variant='outline-success' className=' rounded-5'>Book a Service </Button>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>

        
    </div>
  )
}

export default HomePage