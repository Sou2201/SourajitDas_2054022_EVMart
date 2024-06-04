
import React from 'react'
import './footer.css'

import { Container, Row,Col, ListGroup,ListGroupItem} from "reactstrap"
import {Link} from "react-router-dom"

const footer = () => {

  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='4' className='mb-4' md="6">

        <div className='logo'>
            
            <div>
              <h1 className='text-white'> EvMart</h1>
              
            </div>

            
          </div>
          <p className="footer_text mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, sapiente consequuntur ullam cupiditate impedit quo fuga necessitatibus unde molestias labore laborum alias, suscipit ab non nisi hic nobis assumenda iste.
            </p>

        </Col>

        <Col lg='3' md='3' className='mb-4'>
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Top Categories</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0 '>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0 '>
              <Link to='#'>Modern Sofa</Link>
             </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0 '>
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem  className='ps-0 border-0 '>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>

        <Col lg='2' md='3'  className='mb-4'>
        <div className="footer_quick-links">
            <h4 className="quick_links-title">Useful Links</h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/Shop'>Shop</Link>
              </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0'>
              <Link to='/Login'>Login</Link>
             </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0'>
                <Link to='/Cart'>Cart</Link>
              </ListGroupItem>
              <ListGroupItem  className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>

            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' >
        <div className="footer_quick-links">
            <h4 className="quick_links-title">Contact</h4>
            <ListGroup className='footer_contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>123 ZindaBazar, Sylhet, Banglore</p>
              </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
             <span><i class="ri-phone-line"></i></span>
                <p>+91 9878654321</p>
             </ListGroupItem>
             <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-2'>
             <span><i class="ri-mail-line"></i></span>
                <p> EvMart@gmail.com </p>
              </ListGroupItem>
              

            </ListGroup>
          </div>
        </Col>
        <Col lg='12'>
          <p className="footer_copyright">Copyright {year} developed by Team EvMart. 
          All rights reserved. </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default footer