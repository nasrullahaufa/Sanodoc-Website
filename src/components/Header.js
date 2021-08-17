import logo from "../img/logo.png";
import phone from "../img/phone.png";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";

export default function Header() {
  const history = useHistory();
  const [submenu, setSubmenu] = useState("submenu");
  let submenuActive = "submenu";
  const handleSubmenu = () => {
    console.log("asdfasf");
    setSubmenu("submenu-active");
  };
  const hideSubmenu = () => {
    setSubmenu("submenu");
  };
  const handleNavigation = (e, destination) => {
    e.preventDefault();
    console.log(e.target);
    switch (destination) {
      case "HOME":
        history.push('/')
        break;
      case "PRAKTEK_DOKTER":
        hideSubmenu();
        history.push("/layanan/2");
        break;
      case "LABORATURIUM":
        hideSubmenu();
        history.push("/layanan/1");
        break;
      case "FISIOTERAPI":
        hideSubmenu();
        history.push("/layanan/3");
        break;
      case "VAKSINASI":
        hideSubmenu();
        history.push("/layanan/4");
        break;
      case "DAY_CARE":
        hideSubmenu();
        history.push("/layanan/5");
        break;
      case "HOME_CARE":
        hideSubmenu();
        history.push("/layanan/6");
        break;
      case "COVID":
        hideSubmenu();
        history.push("/layanan/7");
        break;
      case "ISOLASI_MANDIRI":
        break;
      case "LAYANAN":
        history.push('/layanan/')
        break
      case "TENTANG_KAMI":
        history.push('/tentangkami')
        break
      case "CONTACT_US":
        history.push('/contactus')
        break;
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light top-bar">
        <div class="container-md"></div>
      </nav>

      <div className="logo-and-contact flex-row">
        <div>
          <img className="logo-img" src={logo}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div class="flex-row" style={{ display: "flex", marginLeft: "1rem" }}>
            <div style={{ marginRight: "2rem" }}>
              {" "}
              <img fill="currentColor" className="phone-logo" src={phone}></img>
            </div>
            <div class="phone-number-container">
              <div class="mb-1 phone-description">
                <a href="tel:+6281330813300" class="phone-number-desc">
                  {" "}
                  Pendaftaran Konsultasi Dokter &nbsp; &nbsp;
                </a>
              </div>{" "}
              <div class="mb-1 phone-number">
                <a href="tel:+6281330813300" class="phone-number">
                  {" "}
                  0813 3081 3300
                </a>
              </div>{" "}
            </div>
          </div>
          <div class="flex-row" style={{ display: "flex", marginLeft: "2rem" }}>
            <div class="phone-number-container">
              <div class="mb-1 phone-description">
                <a href="tel:+081234462830" class="phone-number-desc">
                  {" "}
                  Pendaftaran Lainnya &nbsp; &nbsp;
                </a>
              </div>{" "}
              <div class="mb-1 phone-number">
                <a href="tel:+081234462870" class="phone-number">
                  {" "}
                  0817 0067 470
                </a>
              </div>{" "}
            </div>
          </div>
          <div class="flex-row" style={{ display: "flex", marginLeft: "1rem" }}>
            <div class="phone-number-container" style={{ border: "none" }}>
              <div class="mb-1 phone-description">
                <a href="tel:+6281234462870" class="phone-number-desc">
                  {" "}
                  Informasi & Laporan
                </a>
              </div>{" "}
              <div class="mb-1 phone-number">
                <a href="tel:+6281234462870" class="phone-number">
                  {" "}
                  0812 3446 2870
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div class="sticky-top">
        <div class="navbar navbar-menu navbar-light bg-light hidden w-full border-t border-gray-300 shadow-sm lg:justify-center lg:items-center sticky-navbar">
          <div class="navigation navbar-wrapper">
            <div class="lg:flex-grow lg:flex justify-between menu-wrapper">
              <div class="logo-div menu-item">
                <a
                  href="/"
                  class="block px-3 py-6 text-site"
                  name="HOME"
                    onClick={e=>handleNavigation(e,"HOME")}
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
                    // onClick={handleNavigation}
                  >
                    <path
                      fill="currentColor"
                      name="HOME"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                </a>
              </div>{" "}
              <div
                class=""
                style={{
                  justifyContent: "space-between",
                  "margin-left": "4rem",
                  flexWrap: "wrap",
                  display: "flex",
                  width: "150%",
                }}
              >
                <div class="menu-item has-submenu  tentang-kami">
                  <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                    <a
                      href=""
                      onClick={e=>handleNavigation(e,"TENTANG_KAMI")}
                      class="menu-item"
                      name="PRAKTEK_DOKTER"
                    >
                      Tentang Kami
                    </a>
                  </div>
                </div>{" "}
                <div class="menu-item has-submenu" 
                // onMouseEnter={handleSubmenu}
                >
                  <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link ">
                    <a
                      href=""
                      onClick={e=>handleNavigation(e,"LAYANAN")}
                      class="menu-item"
                      name="LAYANAN"
                    >
                      Layanan
                    </a>
                  </div>
                </div>{" "}
                <div class="menu-item has-submenu">
                  <div class="block px-3 py-6 mt-1 mr-4 text-sm text-black lg:inline-block xl:text-base lg:mt-0 menu-link">
                    <a
                      href=""
                      onClick={e=>handleNavigation(e,"CONTACT_US")}
                      class="menu-item"
                      name="CONTACT_US"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
        <div class="submenu-wrapper">
          <div class={submenu + " sticky-top"} onMouseLeave={hideSubmenu}>
            <div class="submenu-inner">
              {/* <div class="submenu-title"><p>Layanan</p></div> */}
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    textAlign: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <p class="submenu-link">
                    <a
                      href=""
                      onClick={(e) => handleNavigation(e, "PRAKTEK_DOKTER")}
                    >
                      Praktek Dokter
                    </a>
                  </p>
                  <p class="submenu-link">
                    <a
                      href=""
                      onClick={(e) => handleNavigation(e, "FISIOTERAPI")}
                    >
                      Fisioterapi
                    </a>
                  </p>
                  <p class="submenu-link">
                    <a
                      href=""
                      onClick={(e) => handleNavigation(e, "VAKSINASI")}
                    >
                      Vaksinasi & Suntik Sehat
                    </a>
                  </p>
                  <p class="submenu-link">
                    <a
                      href=""
                      onClick={(e) => handleNavigation(e, "HOME_CARE")}
                    >
                      Home Care
                    </a>
                  </p>
                </div>
                <div
                  style={{
                    width: "50%",
                    textAlign: "left",
                    marginLeft: "1rem",
                  }}
                >
                  <p class="submenu-link">
                    <a
                      href=""
                      onClick={(e) => handleNavigation(e, "LABORATURIUM")}
                    >
                      Laboraturium
                    </a>
                  </p>
                  <p class="submenu-link">
                    <a onClick={(e) => handleNavigation(e, "COVID")} href="">
                      Covid 19
                    </a>
                  </p>
                  <p class="submenu-link">
                    <a href="" onClick={(e) => handleNavigation(e, "DAY_CARE")}>
                      Day Care
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
