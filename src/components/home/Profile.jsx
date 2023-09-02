import React, { useState, useEffect } from 'react'
import { Card, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import '../../style/Profile.css'
import imageprofile from '../image/imageprofile.jpg'
import { MdWorkHistory, MdSchool, MdOutlinePermContactCalendar, MdOutlineHandyman } from 'react-icons/md';
import About from '../home/About'
import '../../style/Navbar.css'
import Experiment from './Experiment';

const Profile = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Fungsi untuk memperbarui waktu setiap detik
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
    <Container>
      <Row>
        <Col>
          <header className="text-center page">
          </header>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div className="sidebar">
            <div data-aos-delay='300' data-aos="fade-right">
            <img
              className="profile-picture"
              src={imageprofile}
              alt="Profile"
            /></div>
            <h4>Fullstack Developer</h4>
            <p>{currentTime.toLocaleTimeString()}</p>
            <hr />
            <ul className="contact-list">
            <div data-aos-delay='300' data-aos="fade-right">
            <Card>
            <div className="h4"><MdOutlinePermContactCalendar/> Kontak</div>
            <div className='list2'>
              <li>
                <strong>Email:</strong> gifiri14@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> (+62) 851-5669-8423
              </li>
              <li>
                <strong>Location:</strong> Blitar, Jawa Timur
              </li>
              </div>
              </Card>
              </div>
            </ul>
            <hr/>
            <div data-aos-delay='300' data-aos="fade-right">
            <Card>
          <ul>
        <div className="h4 paddingleft"><MdOutlineHandyman/> Skills</div>
            <div className="list">
            <br/>
              <li><strong>Programming Languages</strong></li>
              <li>ReactJS<ProgressBar animated now={90}/></li>
              <li>React Native<ProgressBar animated now={50}/></li>
              <li>NodeJS<ProgressBar animated now={60}/></li>
              <li>ExpressJS<ProgressBar animated now={70}/></li>
            <br/>
              <li><strong>Microsoft Office</strong></li>
              <li>Word<ProgressBar animated now={100}/></li>
              <li>Excel<ProgressBar animated now={90}/></li>
              <li>PowerPoint<ProgressBar animated now={90}/></li>
            </div>
          </ul>
          </Card>
          </div>
          </div>
        </Col>
        <Col md={8}>
          <div className="content">
            <About/>
            <br/>
            <h2><MdWorkHistory/> Pengalaman</h2>
            <div data-aos-delay='300' data-aos="fade-left">
            <Card>
            <ul>
              <li>
                <strong>PT. Bank Pembangunan Daerah Bali cabang Negara, Bali</strong> - Intership
                <br />
                <span className="date">Jan 2013 - Juni 2013</span>
              </li>
              <li>
                <strong>PT. Yamaha Motor Co, LTD. cabang Fukuroi, Jepang</strong> - Line Worker Assembling
                <br />
                <span className="date">Okt 2017 - Okt 2020</span>
              </li>
            </ul>
            </Card>
            </div>
            <br/>
            <h2><MdSchool/> Pendidikan</h2>
            <div data-aos-delay='300' data-aos="fade-left">
            <Card>
            <ul>
              <li>
                <strong>SMK N 1 Negara</strong> - Jurusan Akuntansi
                <br />
                <span className="date">2011 - 2014</span>
              </li>
              <li>
                <strong>Akademi Komunitas Negeri Putra Sang Fajar</strong> - Diploma II di Fakultas Teknologi Informasi
                <br />
                <span className="date">2014 - 2016</span>
              </li>
              <li>
                <strong>Politeknik Elektronika Negeri Surabaya</strong> - Diploma III di Fakultas Teknik Informatika
                <br />
                <span className="date">2021 - 2023</span>
              </li>
            </ul>
            </Card>
            </div>
            <br/>
          </div>
        </Col>
      </Row>
      <hr/>
      <div id='porto'>
      <Experiment/>
      </div>
    </Container>
    </div>
  )
}

export default Profile
