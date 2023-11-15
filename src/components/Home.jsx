/* eslint-disable react/no-unknown-property */
import '../assets/js/main.js';
// import '../assets/css/styles.css'
// import Fade from 'react-reveal/Fade';
import perfilImage from '../assets/img/perfil.png';

const Home = () => {
  return (
    <main className="l-main">

  <section className="home bd-grid" id="home">
    <div className="home__data">
      <h1 className="home__title">Hi,<br />Iam <span className="home__title-color">Kamuh Intan</span><br /> Web Designer</h1>
      <a href="#contact" className="button">Contact</a>
    </div>
    {/* <Fade left> */}
    <div className="home__social">
      <a href="https://www.facebook.com/Intankamuh?mibextid=LQQJ4d" className="home__social-icon"><i className="bx bxl-facebook" /></a>
      <a href="https://instagram.com/kamuhintan_?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr" className="home__social-icon"><i className="bx bxl-instagram" /></a>
      <a href="https://github.com/search?q=edaintan2010&type=repositories" className="home__social-icon"><i className="bx bxl-github" /></a>
    </div>
    {/* </Fade> */}

    {/* <Fade bottom> */}
    <div className="home__img">
      <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0" mask-type="alpha">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
        </mask>
        <g mask="url(#mask0)">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          
          <img className="home__blob-img" src={perfilImage} alt="Profile" />
        </g>
      </svg>
    </div>
    {/* </Fade> */}

  </section>
  {/*===== ABOUT =====*/}
  <section className="about section " id="about">
    <h2 className="section-title">About</h2>
    <div className="about__container bd-grid">
      {/* <Fade bottom> */}
      <div className="about__img">
        <img src="/src/assets/img/about.jpg" alt />
      </div>
      {/* </Fade> */}

      {/* <Fade bottom> */}
      <div>
        <h2 className="about__subtitle">I am Kamuh Intan</h2>
        <p className="about__text">
          Saya adalah mahasiswa fakultas Ilmu
          komputer yang memiliki motivasi dan antusias
          yang tinggi dalam dunia pendidikan serta
          ingin berkontribusi dengan organisasi atau
          komunitas yang ada untuk mengembangkan
          minat saya, bisa berkontribusi dengan
          masyarakat dan kiranya bisa membawa saya
          perubahan positif dan bisa menjadi inspirasibagi banyak orang.
        </p>           
      </div> 
      {/* </Fade> */}
                                  
    </div>
  </section>
  {/*===== SKILLS =====*/}
  <section className="skills section" id="skills">
    <h2 className="section-title">Skills</h2>
    <div className="skills__container bd-grid">   
        
        <div>
        <h2 className="skills__subtitle">Personal Skills </h2>
        {/* <Fade bottom> */}
            <p className="skills__text">Dengan keterampilan <strong>manajemen waktu</strong>, <strong>kerja sama</strong>, dan <strong>tanggung jawab</strong>, saya dapat <strong>mengatur jadwal dengan efisien</strong>, <strong>bekerja sama dalam tim</strong>, dan memberikan hasil terbaik. Kemampuan <strong>mudah beradaptasi</strong> memungkinkan saya <strong>cepat belajar dan menghadapi perubahan</strong>. Sifat <strong>pelayanan</strong> saya menciptakan <strong>lingkungan kerja positif</strong>, dan <strong>pengetahuan teknologi</strong> saya dapat meningkatkan efisiensi tugas.</p>
        {/* </Fade > */}
        <h2 className="skills__subtitle">Profesional Skills</h2>
      
        {/* <Fade bottom> */}
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-html5 skills__icon" />
            <span className="skills__name">HTML</span>
          </div>
          <div className="skills__bar skills__html">
          </div>
          <div>
            <span className="skills__percentage">95%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-css3 skills__icon" />
            <span className="skills__name">CSS</span>
          </div>
          <div className="skills__bar skills__css">
          </div>
          <div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxl-javascript skills__icon" />
            <span className="skills__name">JAVASCRIPT</span>
          </div>
          <div className="skills__bar skills__js">
          </div>
          <div>
            <span className="skills__percentage">65%</span>
          </div>
        </div>
        <div className="skills__data">
          <div className="skills__names">
            <i className="bx bxs-paint skills__icon" />
            <span className="skills__name">UX/UI</span>
          </div>
          <div className="skills__bar skills__ux">
          </div>
          <div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>
        {/* </Fade> */}


      </div>
        {/* </Fade>        */}

      <div>              
        <img src="/src/assets/img/work1.jpg" alt className="skills__img" />
      </div>
    </div>
  </section>
  {/*===== WORK =====*/}
  <section className="work section" id="work">
    <h2 className="section-title">Work Experience</h2>
    <div className="work__container bd-grid">
      <a href className="work__img">
        <img src="/src/assets/img/IMG-20231113-WA0045.jpg" alt />
      </a>
      <a href className="work__img">
        <img src="/src/assets/img/IMG-20231113-WA0046.jpg" alt />
      </a>
      <a href className="work__img">
        <img src="/src/assets/img/IMG-20231113-WA0047.jpg" alt />
      </a>
      <a href className="work__img">
        <img src="/src/assets/img/IMG-20231113-WA0048.jpg" alt />
      </a>
      <a href className="work__img">
        <img src="/src/assets/img/IMG-20231113-WA0049.jpg" alt />
      </a>
      <a href className="work__img">
        <img src="/src/assets/img/WhatsApp Image 2023-11-13 at 19.50.11_22724885.jpg" alt />
      </a>
      {/* <a href className="work__img">
        <img src="/src/assets/img/IMG-20231113-WA0050.jpg" alt />
      </a> */}
    </div>
  </section>
  {/*===== CONTACT =====*/}
  <section className="contact section" id="contact">
    <h2 className="section-title">Contact</h2>
    <div className="contact__container bd-grid">
      <form action className="contact__form">
        <input type="text" placeholder="Name" className="contact__input" />
        <input type="mail" placeholder="Email" className="contact__input" />
        <textarea name id cols={0} rows={10} className="contact__input" defaultValue={""} />
        <input type="button" defaultValue="Submit" className="contact__button button" />
      </form>
    </div>
  </section>
</main>

  )
}

export default Home