import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { MdAssignmentInd } from 'react-icons/md'

const About = () => {
  return (
    <div>
        <div className='h2'><MdAssignmentInd/> Tentang Saya</div>
        <div data-aos="fade-left">
        <Card>
            <Row>
                <Col md={12}>
                <Container>
                <div className='text-style'>
                        Saya adalah seorang Fullstack Developer dengan fokus pada pengembangan aplikasi web dan mobile. Selama berkuliah di D3 Fakultas Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS), saya mendalami pemrograman dan teknologi terkini, dan lulus dengan prestasi yang memuaskan.
                        <br/>
                        <br/>
                        Sebelumnya, saya telah berpengalaman bekerja di Jepang melalui IM Japan di Yamaha Marine, di mana saya terlibat dalam proses perakitan selama 3 tahun. Pengalaman tersebut memberikan pemahaman yang kuat tentang proses produksi dan ketelitian dalam pekerjaan.
                        Selain itu, saya memiliki penguasaan bahasa Jepang yang cukup baik, diakui dengan sertifikat JLPT N3, yang memungkinkan saya untuk berkomunikasi dengan baik dengan rekan kerja dari berbagai latar belakang budaya.
                        <br/>
                        <br/>
                        Keterampilan teknis saya meliputi penggunaan framework ReactJS, React Native, NodeJS, dan ExpressJS, serta kemampuan mengelola database seperti MySQL dan PostgreSQL. Kombinasi dari keterampilan teknis dan pengalaman kerja di Jepang memberikan saya perspektif yang berharga dalam menyelesaikan proyek-proyek pengembangan yang menantang.
                        Saya selalu bersemangat untuk terus belajar dan mengembangkan diri dalam dunia teknologi, dan saya siap untuk berkontribusi dengan positif dan memberikan dampak dalam proyek-proyek berarti di masa depan.
                    </div>
                </Container>
                </Col>
            </Row>
        </Card>
    </div>
    </div>
  )
}

export default About
