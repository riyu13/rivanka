/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../../style/Navbar.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import lpk from '../image/images.jpg'
import mitratani from '../image/image2/mitratani.png'
import '../../style/img.css'
import { NavLink } from 'react-router-dom'

const Experiment = () => {
  return (
    <Container>
        <Row>
            <div className='h1'>Portofolio</div>
            <Col>
            <div data-aos="zoom-in-down">
                <img className='image-card' src={lpk}/>
                <Card.Footer style={{textAlign: 'justify'}}>Website yang berisi informasi tentang LPK Yukimaga Surakarta.
                <NavLink to='/Project1' style={{textAlign: 'right'}}>Lihat Website!</NavLink></Card.Footer>
            </div>
            </Col>
            <Col>
            <div data-aos="zoom-in-up">
                <img className='image-card' src={mitratani}/>
                Mitra Tani perusahaan dagang yang bergerak pada bidang penjualan barang dagang pertanian.
                <NavLink to='/Project2' style={{textAlign: 'right'}}>Lihat Website!</NavLink>
            </div>
            </Col>
            <Col>
            <div data-aos="zoom-out-up">
                <img className='image-card' src={lpk}/>
                Mitra Tani perusahaan dagang yang bergerak pada bidang penjualan barang dagang pertanian.
                <NavLink to='/Project2' style={{textAlign: 'right'}}>Lihat Website!</NavLink>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Experiment
