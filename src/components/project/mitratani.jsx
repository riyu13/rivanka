/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Carousel, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import '../../style/Image2.css'
import '../../style/img.css'
import tani1 from '../image/image2/tani1.jpg'
import tani2 from '../image/image2/tani2.jpg'
import tani3 from '../image/image2/tani3.jpg'
import tani4 from '../image/image2/tani4.jpg'
import tani5 from '../image/image2/tani5.jpg'
import '../../style/Navbar.css'
import obat1 from '../project/mitratani/images/obat/obat1.png'
import obat2 from '../project/mitratani/images/obat/obat2.jpg'
import obat3 from '../project/mitratani/images/obat/obat3.jpg'
import obat4 from '../project/mitratani/images/obat/obat4.png'

const Project2 = () => {
  return (
    <div className='app2'>
  <Navbar style={{backgroundColor: 'transparent', height: '50px'}} className='navbar is-fixed-top'>
        <Container>
          <a className='navbar-brand' href='/'>
            <Navbar.Brand className='text-white'>
          <div className="h3" style={{textAlign: 'center'}}>Mitra Tani</div>
              </Navbar.Brand></a>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                  <Nav.Link href='#home' className='text-white'>Beranda</Nav.Link>
                  <Nav.Link href='#obat' className='text-white'>Obat</Nav.Link>
                  <Nav.Link href='#pupuk' className='text-white'>Pupuk</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
        <Carousel id='home'>
          <Carousel.Item>
            <img className='w-100 image2' src={tani1} alt='slide1'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='w-100 image2' src={tani2} alt='slide2'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='w-100 image2' src={tani3} alt='slide2'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='w-100 image2' src={tani4} alt='slide2'/>
          </Carousel.Item>
          <Carousel.Item>
            <img className='w-100 image2' src={tani5} alt='slide2'/>
          </Carousel.Item>
        </Carousel>
        <br/>
        <h3 className='text-center' id='obat'>Obat</h3>
        <h5 className='text-center'>Dalam industri pertanian, obat sangat berperan penting untuk kesuburan tanaman, untuk menjaga tingkat kesuburan tanaman dna terhindar dari berbagai jenis parasit ataupun serangga perusak, dapat menggunakan obat-obatan berikut sesuai dengan kebutuhan anda</h5>
        <Row>
          <Col>
          <img data-aos='zoom-out' data-aos-delay='300' className='image-card' src={obat1}/>
          </Col>
          <Col>
            <img data-aos='zoom-out' data-aos-delay='300' className='image-card' src={obat2}/>
          </Col>
          <Col>
            <img data-aos='zoom-out' data-aos-delay='300' className='image-card' src={obat3}/>
          </Col>
          <Col>
            <img data-aos='zoom-out' data-aos-delay='300' className='image-card' src={obat4}/>
          </Col>
        </Row>
        <br/>
    </div>
  )
}

export default Project2
