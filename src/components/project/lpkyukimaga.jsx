/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import logo from '../image/logo.png'
import { BiLogIn } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import image1 from '../image/clay-banks-hwLAI5lRhdM-unsplash.jpg'
import image2 from '../image/david-edelstein-N4DbvTUDikw-unsplash.jpg'
import image3 from '../image/sora-sagano-8sOZJ8JF0S8-unsplash.jpg'
import image4 from '../image/undraw_connection_re_lcud.svg'
import image5 from '../image/undraw_working_remotely_re_6b3a.svg'
import image6 from '../image/undraw_interview_re_e5jn.svg'
import image7 from '../image/undraw_contact_us_re_4qqt.svg'
import andi from '../image/Andi Setiawan.jpg'
import budi from '../image/Budi Santoso.jpg'
import Gilang from '../image/Gilang (1).jpg'
import giri from '../image/Giri Handoko.jpg'
import eka from '../image/Eka Nur Fitria.jpg'
import topa from '../image/Thopa Syaibani (1).jpg'
import rifai from '../image/Rifhai.jpg'
import yoga from '../image/Yoga Tri Prasetyo.jpg'
import yulianto from '../image/Yulianto.jpg'
import gambar1 from '../image/gambar1.jpg'
import gambar3 from '../image/gambar3.jpg'
import gambar4 from '../image/gambar4.jpg'
import gambar5 from '../image/gambar5.jpg'
import 'bulma/css/bulma.css';
import '../../style/Navbar.css'

const Project1 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div>
<nav className="navbar is-fixed-top" style={{backgroundColor: 'transparent'}}>
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item remove-underline" href="/">
            <img src={logo} alt="Logo" />
        <h1 className="title has-text-white is-5 ml-2" style={{color: '#fff000'}}>LPK Yukimaga Surakarta</h1>
          </a>
          <button className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarMenu" onClick={handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navbarMenu">
          <div className="navbar-end">
            <a className="navbar-item remove-underline" href="#home">Beranda</a>
            <a className="navbar-item remove-underline" href="#layer-one">Magang Jepang</a>
            <a className="navbar-item remove-underline" href="#layer-two">Pengalaman</a>
            <a className="navbar-item remove-underline" href="#layer-three">Tentang Kami</a>
            <a className="navbar-item remove-underline" href="#layer-four">Kontak</a>
            <a className="navbar-item remove-underline" href="/home">
              Log in<BiLogIn/>
            </a>
          </div>
        </div>
      </div>
    </nav>

    {/* layer */}
    <section id="home" className="hero">
      <Carousel>
        <div>
          <img src={image1} alt="slide1" />
          <p className="legend">Japan traditional style mise, toko tradisional jepang.</p>
        </div>
        <div>
          <img src={image2} alt="slide2" />
          <p className="legend">Arakura Fuji Sengen Jinja Shrine, terletak di Fujiyoshida, prefektur Yamanashi.</p>
        </div>
        <div>
          <img src={image3} alt="slide3" />
          <p className="legend">Musim semi di jembatan Meguro, prefektur Matsuno.</p>
        </div>
        <div>
          <img src={gambar1} alt="slide4" />
          <p className="legend">Perusahaan manufaktur mesin kapal boat.</p>
        </div>
        <div>
          <img src={gambar3} alt="slide6" />
          <p className="legend">Perusahaan pembuatan mobil.</p>
        </div>
        <div>
          <img src={gambar4} alt="slide7" />
          <p className="legend">Kedai yakitori di Asakusa, Tokyo.</p>
        </div>
        <div>
          <img src={gambar5} alt="slide8" />
          <p className="legend">Masinis melakukan pemeriksaan kembali, sebelum keberangkatan kereta cepat.</p>
        </div>
      </Carousel>
      </section>
   <section id="layer-one" className="hero is-light is-fullheight layer-transition">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div data-aos-delay="300" data-aos="fade-up-right">
              <h1 className="title">
                Magang Ke Jepang
              </h1></div>
              <div data-aos-delay="300" data-aos="fade-down-right">
              <h2 className="subtitle has-text-justified">
                Magang di Jepang bisa menjadi pengalaman hidup yang tidak terlupakan dan membuka pintu untuk membangun karir global. Jepang memiliki teknologi canggih dan industri yang berkembang pesat, yang membuatnya menjadi tempat yang menarik bagi orang yang ingin belajar dan berkontribusi pada kemajuan dunia.
              </h2>
              <div data-aos-delay="300" data-aos="fade-right">
              <h2 className="subtitle has-text-justified">
                Budaya Jepang yang kaya dan unik juga menarik minat banyak orang untuk merasakan pengalaman langsung di sana. Dari seni tradisional seperti bonsai dan ikebana, hingga teknologi terbaru seperti robotika dan kendaraan listrik, Jepang memiliki banyak hal yang dapat dipelajari dan dijelajahi.
              </h2></div>
              </div>
            </div>
            <div className="column is-half">
              <div data-aos-delay="300" data-aos="fade-up-left">
              <img src={image4}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //layer 2 */}
    <section id="layer-two" className="hero is-warning is-fullheight">  
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div data-aos-delay="300" data-aos="fade-up">
              <img src={image5}/>
            </div></div>
            <div className="column is-half">
              <h1 className="title">
                Pengalaman
                <br/>
                <br/>
              </h1>
              <h2 className="subtitle">
              <Carousel>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={andi} />
                <p className="legend">Andi Setiawan</p>
              </figure>
              <p style={{fontSize: 16, width: 128}}>"Saya bekerja di salah satu perusahaan manufaktur terbesar di Jepang selama 3 tahun, dan saya sangat terkesan dengan kecanggihan teknologi dan inovasi di sini"</p>
              </div>
               <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={giri} />
                <p className="legend">Giri Handoko</p>
                <p style={{fontSize: 16, width: 128}}>"Magang di perusahaan manufaktur di Jepang selama 6 bulan, dan saya sangat terkesan dengan keseriusan dan keterampilan teknis karyawan di sini."</p>
              </figure>
              </div>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={Gilang}/>
                <p className="legend">Gilang Firza Rivanka</p>
                <p style={{fontSize: 16, width: 128}}>"Pernah bekerja di salah perusahaan manufaktur terbesar di Jepang, dan saya sangat terkesan dengan kemampuan beradaptasi dan ketangkasan rekan kerja saya."</p>
              </figure>
              </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={eka}/>
                <p className="legend">Eka Nur Fitria</p>
                <p style={{fontSize: 16, width: 128}}>"Saya magang di sebuah perkebunan teh di Jepang dan merasa sangat terkesan dengan keindahan perkebunan mereka. "</p>
              </figure>
              </div>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={budi}/>
                <p className="legend">Budi Santoso</p>
                <p style={{fontSize: 16, width: 128}}>"Saya bekerja di salah satu perusahaan manufaktur terbesar di jepang, dan saya kagum dengan luas serta teknologi dalam perusahaan tersebut."</p>
              </figure>
              </div>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={topa} />
                <p className="legend">Thopa Syaibani</p>
                <p style={{fontSize: 16, width: 128}}>"Pertanian di Jepang sangat menghargai alam dan lingkungan, dan memperhatikan kualitas dan keamanan pangan yang dihasilkan."</p>
              </figure>
              </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={rifai}/>
                <p className="legend">Rifa'i</p>
                <p style={{fontSize: 16, width: 128}}>"Saya belajar banyak tentang pengembangan dan produksi komponen otomotif yang berkualitas tinggi."</p>
              </figure>
              </div>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={yoga} />
                <p className="legend">Yoga Tri Prasetyo</p>
                <p style={{fontSize: 16, width: 128}}>"Saya belajar banyak tentang teknologi mutakhir yang digunakan di produksi peralatan elektronik."</p>
              </figure>
              </div>
              <div>
              <figure className="image is-128x128">
                <img className="is-rounded" src={yulianto} />
                <p className="legend">Yulianto</p>
                <p style={{fontSize: 16, width: 128}}>"belajar banyak tentang cara membuat kain berkualitas tinggi dan proses pencucian yang benar untuk menjaga warna dan tekstur kain."</p>
              </figure>
              </div>
              </div>
              </Carousel>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* //layer 3 */}
    <section id="layer-three" className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div data-aos-delay="300" data-aos="fade-down-left">
              <h1 className="title">
                Tentang kami
              </h1>
              </div>
              <div data-aos-delay="300" data-aos="fade-up-left">
              <h2 className="subtitle has-text-justified">
                LPK (Lembaga Pelatihan dan Kursus) adalah suatu lembaga yang menyediakan berbagai macam program pelatihan dan kursus untuk membantu individu dalam meningkatkan keterampilan dan pengetahuan mereka. Kami di LPK berkomitmen untuk memberikan pelatihan berkualitas tinggi dan mempersiapkan peserta untuk sukses di dunia kerja atau di bidang akademik.
              </h2>
              </div>
              <div data-aos-delay="300" data-aos="fade-left">
              <h2 className="subtitle has-text-justified">
                Kami memberikan keterampilan dan kecakapan berbahasa jepang, mengantarkan para individu semakin siap mental untuk berangkat dan mempermudah memperoleh pekerjaan di jepang, dapat menyalurkan melalui IM JAPAN, Swasta, dan Tokutei Ginou. 
              </h2>
              </div>
            </div>
            <div className="column is-half">
            <div data-aos="zoom-out" data-aos-delay="300">
              <img src={image6}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="layer-four" className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title" style={{color: '#8B4513'}}>
            <div data-aos-delay="300" data-aos="fade-down">
                Kontak
                </div>
              </h1>
              <h2 className="subtitle">
                <div className="card-name">
                  <div data-aos="zoom-out" data-aos-delay="300">
        <img className="card-photo" src="https://via.placeholder.com/150" alt="Dummy Photo" /></div>
        <div className="card-info">
          <h3 data-aos-delay="300" data-aos="fade-right" className="card-title" style={{color: '#8B4513'}}>Bpk. Samijo</h3>
          <p data-aos-delay="300" data-aos="fade-right" className="card-subtitle" style={{color: '#8B4513'}}>Pemilik LPK Yukimaga Surakarta</p>
          <p data-aos-delay="300" data-aos="fade-right" className="contact-number" style={{color: '#8B4513'}}>Phone: +62 818-0255-2803</p>
          <p data-aos-delay="300" data-aos="fade-right" className="contact-instagram" style={{color: '#8B4513'}}>Instagram: @yukimagamagangjepang</p>
          <p data-aos-delay="300" data-aos="fade-right" className="contact-facebook" style={{color: '#8B4513'}}>Facebook: Mas Sam Lpk Yukimaga</p>
        </div>
      </div>

      <div className="contact-card">
        <h4 className="card-title" style={{color: '#8B4513'}}>About Me</h4>
        <p className="card-text" style={{color: '#8B4513'}}></p>
      </div>
              </h2>
            </div>
            <div className="column is-half">
              <div data-aos='fade-left' data-aos-delay="300">
              <img src={image7}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Project1