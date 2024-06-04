
import React from 'react'

import Helmet from '../components/Helmet/Helmet'

import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'

const Home = () => {
  return <Helmet title={"Home"}>
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='5'>
            <div className='hero_content'>
              <p className='hero_subtitle'>Trending products</p>
              <h2> Make your interior</h2>
              <p>
                Lorem ipsum
              </p>
              <button className='buy_btn'>SHOP NOW</button>
            </div>
          </Col>
             
             <Col lg='6' md='8'><div className='hero_img'>
              <img src={heroImg} alt=""/>
            </div></Col>
          
            
          
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home