import Aos from "aos";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import { useHistory } from "react-router";
import React, { useEffect, useRef, useState } from "react";

function TentangKami() {
  const history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleNavigation = (e) => {
    e.preventDefault();
    history.push("/layanan/2");
  };
  return (
    <div class="main-section">
      <div
        class="text-center bg-siteGray pt-13 text-container"
        style={{ paddingBottom: "0.1rem", paddingTop: "2rem" }}
        data-aos="fade-up"
      >
        <div class="container mx-auto">
          <div
            style={{ textAlign: "left", marginBottom: "3rem" }}
            class="leading-none mb-9 md:mb-12 welcome-title aos-init aos-animate text-title left"
          >
            <p>
              <span class="text-siteOrange">
                Tentang <span style={{ color: "#855C26" }}>Kami</span>
              </span>{" "}
            </p>
          </div>{" "}
        </div>
      </div>

      <div class="text-center bg-siteGray pt-13 pb-18 text-container-1">
        <div class="container mx-auto" data-aos="fade-up">
          {/* <div class="mb-2 text-xs tracking-widest uppercase md:mb-3 lg:mb-4 futura-std-medium md:text-sm aos-init aos-animate text-header">
        Welcome to
      </div>{" "} */}
          <div
            style={{ fontSize: "1.3rem", letterSpacing: "1px" }}
            class="SFUILIGHT mb-8 leading-7 text-justify md:mb-11 md:text-center aos-init text-content"
          >
            Didirikan pada 17 Juli 2017 di Surabaya, Indonesia, SANODOC Clinic
            adalah klinik kesehatan yang menyediakan berbagai pelayanan
            kesehatan seperti konsultasi dokter, pelayanan laboratorium,
            fisioterapi, day care, dan home care. SANODOC Clinic bekerja sama
            dengan Laboratorium Biotest untuk menyediakan layanan yang
            terintegrasi bagi pasien.
            <div style={{ textAlign: "center" }}></div>
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
      <div
        className="text-container"
        style={{ paddingTop: "1rem" }}
        data-aos="fade-up"
      >
        {" "}
        <p
          style={{
            padding: "1rem",
            paddingBottom: "0rem",
            marginBottom: "0rem",
          }}
          class="visi-misi container"
        >
          Visi
        </p>
        <div style={{ textAlign: "left" }} class="  container">
          <p>
            Menjadi penyedia layanan kesehatan yang akurat, terpercaya, dan
            nyaman bagi keluarga Indonesia
          </p>
        </div>{" "}
        <p
          style={{
            padding: "1rem",
            paddingBottom: "0rem",
            marginBottom: "1rem",
          }}
          class="visi-misi container"
        >
          Misi
        </p>
        <div style={{ textAlign: "left" }} class="  container">
          <p>
          &#9656; Memberikan layanan dokter spesialis yang ahli di bidangnya
          </p>
          <p>
          &#9656; Menyediakan obat yang dibutuhkan dari sumber yang terpercaya
          </p>
          <p>&#9656; Menyediakan tempat layanan bersih dan nyaman</p>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
