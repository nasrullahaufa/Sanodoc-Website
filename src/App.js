import logo from "./img/logo.png";
import React, { useEffect, useRef, useState } from "react";
import logo2 from "./img/logo2.png";
import isolasiMandiri1 from "./img/IsolasiMandiri_1.JPG";
import isolasiMandiri2 from "./img/IsolasiMandiri_2.JPG";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import phone from "./img/phone.svg";
function App() {
  const homeRef = useRef(null);
  const praktekDokterRef = useRef(null);
  const isolasiMandiriRef = useRef(null);
  const contactRef = useRef(null);

  const [submenu, setSubmenu] = useState("submenu");
  let submenuActive = "submenu";
  const handleNavigation = (e) => {
    e.preventDefault();
    console.log(e.target);
    switch (e.target.name) {
      case "HOME":
        homeRef.current.scrollIntoView();
        break;
      case "PRAKTEK_DOKTER":
        praktekDokterRef.current.scrollIntoView();
        break;
      case "ISOLASI_MANDIRI":
        isolasiMandiriRef.current.scrollIntoView();
        break;
      case "CONTACT_US":
        contactRef.current.scrollIntoView();
        break;
    }
  };

  const handleSubmenu = () => {
    console.log("asdfasf");
    setSubmenu("submenu-active");
  };
  const hideSubmenu = () => {
    setSubmenu("submenu");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [submenu]);
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light top-bar">
        <div class="container-md"></div>
      </nav>

      <div className="logo-and-contact d-flex flex-row">
        <img className="logo-img" src={logo}></img>
        <div class="d-flex flex-row">
          <div>
            {" "}
            <img fill="currentColor" className="phone-logo" src={phone}></img>
          </div>
          <div class="phone-number-container">
            <div class="mb-1 phone-number">
              <a href="tel:+081234462830" class="phone-number">
                {" "}
                0812 3446 2840
              </a>
            </div>{" "}
            <div class="mb-1 phone-number">
              <a href="tel:+081234462870" class="phone-number">
                {" "}
                0812 3446 2870
              </a>
            </div>{" "}
          </div>
        </div>

        {/* <a href="tel:03100531000" className="phone-number">
            &#40;031&#41; 0053 1000<span>asd</span>
             asds
          </a> */}
      </div>
<div class="sticky-top">

  <div

class="navbar navbar-menu navbar-light bg-light flex-grow hidden w-full border-t border-gray-300 shadow-sm lg:flex lg:justify-center lg:items-center sticky-navbar"
>
<div class="container mx-auto navigation navbar-wrapper">
  <div class="lg:flex-grow lg:flex justify-between menu-wrapper">
    <div class="logo-div menu-item">
      <a
        href="/"
        class="block px-3 py-6 text-site Orange lg:inline-block lg:mt-0 menu-link nuxt-link-exact-active nuxt-link-active "
        name="HOME"
        onClick={handleNavigation}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="h-5 xl:h-6 svg-inline--fa fa-home fa-w-18  home-logo"
          name="HOME"
          name="HOME"
          onClick={handleNavigation}
        >
          <path
            fill="currentColor"
            name="HOME"
            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          ></path>
        </svg>
      </a>
    </div>{" "}
    <div class="menu-item has-submenu" onMouseEnter={handleSubmenu}>
      <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
        <a
          href=""
          onClick={handleNavigation}
          class="menu-item"
          name="PRAKTEK_DOKTER"
        >
          Praktek Dokter
        </a>
      </div>
    </div>{" "}
    <div class="menu-item has-submenu">
      <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
        <a
          href=""
          onClick={handleNavigation}
          class="menu-item"
          name="ISOLASI_MANDIRI"
        >
          Perawatan Isolasi Mandiri
        </a>
      </div>
    </div>{" "}
    <div class="menu-item has-submenu">
      <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
        <a
          href=""
          onClick={handleNavigation}
          class="menu-item"
          name="CONTACT_US"
        >
          Contact Us
        </a>
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
<div class="submenu-wrapper">
<div class={submenu + " sticky-top"} onMouseLeave={hideSubmenu}>
  <div class="submenu-inner">
    <div class="submenu-title">About Us</div>
    <div class="flex">
      <div class="w-3/12 mr-6">
        <div class="rounded-lg submenu-thumbnail about-us"></div>
      </div>
      <div class="w-9/12">
        <div class="flex">
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/our-specialists/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Our Specialists
              </a>
            </div>
            <div>
              <a
                href="/about-us/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Our Clinic
              </a>
            </div>
          </div>
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/personal-data-protection-act-pdpa/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Personal Data Protection Act (PDPA)
              </a>
            </div>
            <div>
              <a
                href="/your-visit-with-us/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Your Visit With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="submenu">
  <div class="submenu-inner">
    <div class="submenu-title">Common Eye Conditions</div>
    <div class="flex">
      <div class="w-3/12 mr-6">
        <div
          class="
                          rounded-lg
                          submenu-thumbnail
                          common-eye-condition-nav
                        "
        ></div>
      </div>
      <div class="w-9/12">
        <div class="flex">
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/learn-more-about-your-eyes/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                About Eyes
              </a>
            </div>
            <div>
              <a
                href="/age-related-macular-degeneration-amd/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Age-Related Macular Degeneration (AMD)
              </a>
            </div>
            <div>
              <a
                href="/cataract/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Cataract
              </a>
            </div>
            <div>
              <a
                href="/central-serous-chorioretinopathy-csc/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Central Serous Chorioretinopathy (CSC)
              </a>
            </div>
            <div>
              <a
                href="/diabetic-retinopathy/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Diabetic Retinopathy
              </a>
            </div>
            <div>
              <a
                href="/flashes-and-floaters/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Flashes and Floaters
              </a>
            </div>
            <div>
              <a
                href="/glaucoma/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Glaucoma
              </a>
            </div>
            <div>
              <a
                href="/oculoplastic-conditions/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Oculoplastic and Aesthetic Conditions
              </a>
            </div>
          </div>
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/polypoidal-choroidal-vasculopathy-pcv/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Polypoidal Choroidal Vasculopathy (PCV)
              </a>
            </div>
            <div>
              <a
                href="/poor-vision-in-children/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Poor Vision in Children
              </a>
            </div>
            <div>
              <a
                href="/refractive-errors/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Refractive Errors
              </a>
            </div>
            <div>
              <a
                href="/retinal-detachment/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Retinal Detachment
              </a>
            </div>
            <div>
              <a
                href="/retinal-venous-occlusive-disease/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Retinal Venous Occlusive Disease
              </a>
            </div>
            <div>
              <a
                href="/retinitis-pigmentosa-rp/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Retinitis Pigmentosa (RP)
              </a>
            </div>
            <div>
              <a
                href="/squint/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Squint
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="submenu">
  <div class="submenu-inner">
    <div class="submenu-title">Diagnostic Services</div>
    <div class="flex">
      <div class="w-3/12 mr-6">
        <div class="rounded-lg submenu-thumbnail diagnostic"></div>
      </div>
      <div class="w-9/12">
        <div class="flex">
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/avanti-widefield-enface-oct-angiovue/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Avanti – Widefield Enface OCT and Angiovue
              </a>
            </div>
            <div>
              <a
                href="/diabetic-retinopathy-screening/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Diabetic Retinopathy Screening
              </a>
            </div>
            <div>
              <a
                href="/iol-master/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                IOL Master
              </a>
            </div>
            <div>
              <a
                href="/konan-corneal-endothelial-cell-counter/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Konan Corneal Endothelial Cell Counter
              </a>
            </div>
            <div>
              <a
                href="/optical-coherence-tomography-oct-macular-optic-nerve-scans/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Optical Coherence Tomography (OCT) Macular & Optic Nerve
                Scans
              </a>
            </div>
          </div>
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/itrace/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                iTrace
              </a>
            </div>
            <div>
              <a
                href="/verion-image-guided-system/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                VERION Image Guided System
              </a>
            </div>
            <div>
              <a
                href="/topcon-imagenet-retinal-digital-imaging-system/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Topcon Imagenet Retinal Digital Imaging System
              </a>
            </div>
            <div>
              <a
                href="/topcon-non-mydriatic-fundal-camera/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Topcon Non-mydriatic Camera
              </a>
            </div>
            <div>
              <a
                href="/lipiscan-jj/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Lipiscan (J&J)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="submenu">
  <div class="submenu-inner">
    <div class="submenu-title">Surgical Services</div>
    <div class="flex">
      <div class="w-3/12 mr-6">
        <div class="rounded-lg submenu-thumbnail surgical"></div>
      </div>
      <div class="w-9/12">
        <div class="flex">
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/cataract-surgery/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Cataract Surgery
              </a>
            </div>
            <div>
              <a
                href="/corneal-surgery/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Corneal Surgery
              </a>
            </div>
            <div>
              <a
                href="/glaucoma-surgery/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Glaucoma Surgery
              </a>
            </div>
            <div>
              <a
                href="/vision-correction-surgery/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Vision Correction Surgery
              </a>
            </div>
          </div>
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/medical-retina-services/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Medical Retina Services
              </a>
            </div>
            <div>
              <a
                href="/oculoplastic-and-aesthetic-services/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Oculoplastic and Aesthetic Services
              </a>
            </div>
            <div>
              <a
                href="/vitreo-retinal-surgery/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Vitreo-retinal Surgery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="submenu">
  <div class="submenu-inner">
    <div class="submenu-title">Laser Services</div>
    <div class="flex">
      <div class="w-3/12 mr-6">
        <div class="rounded-lg submenu-thumbnail laser"></div>
      </div>
      <div class="w-9/12">
        <div class="flex">
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/pascal-laser/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                PASCAL Laser
              </a>
            </div>
            <div>
              <a
                href="/slt-laser/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                SLT Laser
              </a>
            </div>
            <div>
              <a
                href="/co2-laser/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                CO2 Laser
              </a>
            </div>
          </div>
          <div class="w-6/12 px-8">
            <div>
              <a
                href="/yag-laser/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                YAG Laser
              </a>
            </div>
            <div>
              <a
                href="/micropulse-tcp/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Micropulse TCP
              </a>
            </div>
            <div>
              <a
                href="/laser-iridotomy/"
                class="
                                block
                                py-2
                                mb-2
                                border-b border-gray-500
                                submenu-link
                                hover:text-siteOrange
                              "
              >
                Laser Iridotomy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</div>
      
      <div class="main-section">
        <div
          class="text-center bg-siteGray pt-13 pb-18 text-container"
          ref={homeRef}
          data-aos="fade-up"
        >
          <div class="container mx-auto">
            <div class="mb-2 text-xs tracking-widest uppercase md:mb-3 lg:mb-4 futura-std-medium md:text-sm aos-init aos-animate text-header">
              Welcome to
            </div>{" "}
            <div class="leading-none mb-9 md:mb-12 welcome-title aos-init aos-animate text-title">
              <p>
                <span class="text-siteOrange">
                  <span style={{ color: "#855C26" }}>Sanodoc</span> Clinic
                </span>{" "}
              </p>
            </div>{" "}
            <div class="mb-8 leading-7 text-justify md:mb-11 md:text-center aos-init text-content">
              Sanodoc Clinic adalah klinik kesehatan yang menyediakan berbagai
              pelayanan kesehatan seperti konsultasi dokter, pelayanan
              laboratorium, fisioterapi, day care, dan home care. Sanodoc Clinic
              bekerja sama dengan Laboratorium Biotest untuk menyediakan layanan
              yang terintegrasi bagi pasien.
            </div>{" "}
            <div></div>
          </div>
        </div>

        <div
          class="text-center bg-siteGray pt-13 pb-18 text-container-1"
          ref={praktekDokterRef}
        >
          <div class="container mx-auto" data-aos="fade-up">
            {/* <div class="mb-2 text-xs tracking-widest uppercase md:mb-3 lg:mb-4 futura-std-medium md:text-sm aos-init aos-animate text-header">
            Welcome to
          </div>{" "} */}
            <div class="leading-none mb-9 md:mb-12 welcome-title aos-init aos-animate text-title">
              <p>
                <span class="text-siteOrange">
                  Praktek <span style={{ color: "#855C26" }}>Dokter</span>
                </span>{" "}
              </p>
            </div>{" "}
            <div class="mb-8 leading-7 text-justify md:mb-11 md:text-center aos-init text-content">
              Sanodoc Clinic menyediakan berbagai layanan praktek dokter
              spesialis untuk memenuhi dan menangani kebutuhan pasien. Ketahui
              lebih lanjut mengenai layanan praktek dokter di Sanodoc Clinic.
            </div>{" "}
            <div></div>
          </div>
        </div>
        <div class="text-container" data-aos="fade-up" ref={isolasiMandiriRef}>
          <div class="leading-none mb-9 md:mb-12 welcome-title aos-init aos-animate text-title">
            <p>
              <span class="text-siteOrange">
                Perawatan <span style={{ color: "#855C26" }}>Isolasi</span>{" "}
                Mandiri
              </span>{" "}
            </p>
          </div>{" "}
          <div class="d-flex flex-row">
            <div data-aos="fade-right" style={{ width: "50%" }}>
              <img src={isolasiMandiri1} style={{ "max-width": "45vw" }}></img>
            </div>
            <div>
              <img
                src={isolasiMandiri2}
                data-aos="fade-left"
                style={{ "max-width": "45vw" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="contact-container" ref={contactRef} data-aos="fade-up">
          {" "}
          <div className="contact-header">
            Contact <span style={{ color: "#855C26" }}>Us</span>
          </div>
          <div className="contact-detail">Jl. Ciliwung 54, Surabaya</div>
          <div className="contact-detail">
            (031) 9953 1000 &nbsp;| &nbsp;0813 3081 3300
          </div>
          <div class="d-flex flex-row  contact-sosmed">
            <div class="d-flex flex-row instagram">
              <div class="instagrem">
                <img src={instagram} style={{ "max-height": "1rem" }}></img>
              </div>
              <div> &nbsp;@sanodoclinic &nbsp; &nbsp;</div>
            </div>
            <div class="d-flex flex-row facebook">
              <div class="facebook">
                <img src={facebook} style={{ "max-height": "1rem" }}></img>
              </div>
              <div> &nbsp;@sanodoclinic</div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar bottom-bar navbar-light bg-light d-flex flex-row">
        <div data-aos="fade-right">
          <img src={logo2} class="bottom-logo"></img>
        </div>
        {/* <div class="bottom-bar-text" data-aos="fade-right">
          <div>Contact us :</div>
          <div> Jl. Ciliwung 54, Surabaya</div>
          <div>(031) 9953 1000 &nbsp;| &nbsp;0813 3081 3300</div>
          <div class="d-flex flex-row">
            <div class="d-flex flex-row">
              <div>
                <img src={instagram} style={{ "max-height": "1rem" }}></img>
              </div>
              <div> &nbsp;@sanodoclinic &nbsp; &nbsp;</div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <img src={facebook} style={{ "max-height": "1rem" }}></img>
              </div>
              <div> &nbsp;@sanodoclinic</div>
            </div>
          </div>
        </div> */}
      </nav>
    </div>
  );
}

export default App;
