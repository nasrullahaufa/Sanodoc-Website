import logo from "./logo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
 
        <nav class="navbar navbar-expand-lg navbar-light bg-light top-bar">
          <div class="container-md"></div>
        </nav>
        <div class="logo-and-contact">

        <div className="logo">
          <img className="logo-img" src={logo}></img>
        </div>
        <div>
            <img src={phone}></img>
        </div>
        
        </div>
        <div
          id="sticky-navbar"
          class="navbar navbar-menu sticky-top navbar-light bg-light flex-grow hidden w-full border-t border-gray-300 shadow-sm lg:flex lg:justify-center lg:items-center sticky-navbar"
        >
          <div class="container mx-auto navigation navbar-wrapper">
            <div class="lg:flex-grow lg:flex justify-between menu-wrapper">
              <div class="logo-div menu-item home-logo">
                <a
                  href="/"
                  aria-current="page"
                  class="block px-3 py-6 text-site Orange lg:inline-block lg:mt-0 menu-link nuxt-link-exact-active nuxt-link-active home-logo "
                  title="Home"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="h-5 xl:h-6 svg-inline--fa fa-home fa-w-18  home-logo"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                </a>
              </div>{" "}
              <div class="menu-item has-submenu">
                <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                  About Us
                </div>
              </div>{" "}
              <div class="menu-item has-submenu">
                <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                  Praktek Dokter
                </div>
              </div>{" "}
              <div class="menu-item has-submenu">
                <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                  Perawatan Isolasi Mandiri
                </div>
              </div>{" "}
              {/* <div class="menu-item has-submenu">
                <div class="block px-3 py-6 mt-4 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                  Surgical Services
                </div>
              </div>{" "}
              <div class="menu-item has-submenu">
                <div class="block px-3 py-6 mt-4 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                  Laser Services
                </div>
              </div>{" "} */}
              {/* <div class="menu-item">
                <a
                  href="/teaching-and-research/"
                  class="block px-3 py-6 mt-4 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link"
                >
                  Teaching &amp; Research
                </a>
              </div>{" "} */}
              {/* <div class="menu-item">
                <a
                  href="/contactus/"
                  class="block px-3 py-6 mt-4 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link"
                >
                  Contact Us
                </a>
              </div> */}
            </div>{" "}
          </div>
        </div>
        {/* <div class="about-section">aduasdhf</div> */}
        <div class="text-center bg-siteGray pt-13 pb-18 text-container">
          <div class="container mx-auto">
            <div class="mb-2 text-xs tracking-widest uppercase md:mb-3 lg:mb-4 futura-std-medium md:text-sm aos-init aos-animate text-header">
              Welcome to
            </div>{" "}
            <div class="leading-none mb-9 md:mb-12 welcome-title aos-init aos-animate text-title">
              <p>
                <span class="text-siteOrange"><span style={{color:'#855C26'}}>Sanodoc</span> Clinic</span>{" "}
              </p>
            </div>{" "}
            <div class="mb-8 leading-7 text-justify md:mb-11 md:text-center aos-init text-content">
              Sanodoc Clinic adalah klinik kesehatan yang menyediakan berbagai
              pelayanan kesehatan seperti konsultasi dokter, pelayanan
              laboratorium, fisioterapi, day care, dan home care. Sanodoc Clinic
              bekerja sama dengan Laboratorium Biotest untuk menyediakan layanan
              yang terintegrasi bagi pasien.
            </div>{" "}
            <div>
              
            </div>
          </div>
        </div>
        <div style={{height:'1000px'}}>

        </div>

    </div>
  );
}

export default App;
