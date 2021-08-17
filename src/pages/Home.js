import Aos from "aos";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import { useHistory } from "react-router";
import React, { useEffect, useRef, useState } from "react";

function Home() {
  const history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleNavigation = (e, key) => {
    switch (key) {
      case "PRAKTEK_DOKTER":
        history.push("/layanan/praktekdokter");
        break;
      case "INSTAGRAM":
        window.open("https://www.instagram.com/sanodoclinic/?hl=id");
        break;
      case "FACEBOOK":
        window.open("https://web.facebook.com/sanodoclinicsby?_rdc=1&_rdr");
        break;

      default:
        break;
    }
  };
  return (
    <div class="main-section">
      <div
        class="text-center bg-siteGray pt-13 pb-18 text-container"
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

      <div class="text-center bg-siteGray pt-13 pb-18 text-container-1">
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
            Sanodoc Clinic menyediakan berbagai layanan praktek dokter spesialis
            untuk memenuhi dan menangani kebutuhan pasien. Ketahui lebih lanjut
            mengenai layanan praktek dokter di Sanodoc Clinic.
            <div style={{ textAlign: "center" }}>
              <button
                class="btn first"
                onClick={(e) => {
                  handleNavigation(e, "PRAKTEK_DOKTER");
                }}
              >
                Learn More
              </button>
            </div>
          </div>{" "}
          <div></div>
        </div>
      </div>
      {/* <div class="text-container" data-aos="fade-up" ref={isolasiMandiriRef}>
      <div class="leading-none mb-9 md:mb-12 welcome-title aos-init aos-animate text-title">
        <p>
          <span class="text-siteOrange">
            Perawatan <span style={{ color: "#855C26" }}>Isolasi</span>{" "}
            Mandiri
          </span>{" "}
        </p>
      </div>{" "}
      <div class="bsflex-row">
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
     */}
      <div className="contact-container" data-aos="fade-up">
        {" "}
        <div className="contact-header">
          Contact <span style={{ color: "#855C26" }}>Us</span>
        </div>
        <div className="contact-detail">Jl. Ciliwung 54, Surabaya</div>
        <div className="contact-detail">
          (031) 9953 1000 &nbsp;| &nbsp;0813 3081 3300
        </div>
        <div class="bsflex-row  contact-sosmed">
          <div
            class="bsflex-row instagram"
            onClick={(e) => handleNavigation(e, "INSTAGRAM")}
          >
            <div class="instagrem">
              <img src={instagram} style={{ "max-height": "1rem" }}></img>
            </div>
            <div> &nbsp;@sanodoclinic &nbsp; &nbsp;</div>
          </div>
          <div
            class="bsflex-row facebook"
            onClick={(e) => handleNavigation(e, "FACEBOOK")}
          >
            <div class="">
              <img src={facebook} style={{ "max-height": "1rem" }}></img>
            </div>
            <div> &nbsp;@sanodoclinic</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
