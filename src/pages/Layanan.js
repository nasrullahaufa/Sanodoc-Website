import arrow from "../img/arrow.png";
import biotest from "../img/biotest.png";
import praktek1 from "../img/praktek1.jpg";
import praktek2 from "../img/praktek2.jpg";
import praktek3 from "../img/praktek3.jpg";
import praktek4 from "../img/praktek4.jpg";
import dayCare1 from "../img/dayCare1.jpg";
import dayCare2 from "../img/dayCare2.jpg";
import postCare from "../img/postCare.jpg";
import isolasiMandiri1 from "../img/IsolasiMandiri_1.JPG";
import isolasiMandiri2 from "../img/IsolasiMandiri_2.JPG";
import ruangFisioterapi from "../img/ruangFisioterapi.jpg";
import ruangTreadmill from "../img/ruangTreadmill.jpg";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Aos from "aos";
import FadeIn from "react-fade-in";
import { useHistory } from "react-router";
function Layanan() {
  const [lab, setLab] = useState("content");
  const [praktekDokter, setPraktekDokter] = useState("content");
  const [fisioterapi, setFisioterapi] = useState("content");
  const [vaksinasi, setVaksinasi] = useState("content");
  const [dayCare, setDayCare] = useState("content");
  const [homeCare, setHomeCare] = useState("content");
  const [covid, setCovid] = useState("content");
  let params = useParams();
  const history = useHistory();
  const praktekDokterRef = useRef(null);
  useEffect(() => {
    console.log(params, "usee");

    switch (params.id) {
      case "praktekdokter":

        setPraktekDokter("content-active");

        params.id = "";
        break;
      case "1":
        setLab("content-active");
        window.scrollTo(0, 0);
        params.id = "";
        break;
      case "3":
        setFisioterapi("content-active");
        window.scrollTo(0, 0);
        params.id = "";
        break;
      case "4":
        setVaksinasi("content-active");
        window.scrollTo(0, 0);
        params.id = "";
        break;
      case "5":
        setDayCare("content-active");
        window.scrollTo(0, 0);
        params.id = "";
        break;
      case "6":
        setHomeCare("content-active");
        window.scrollTo(0, 0);
        params.id = "";
        break;
      case "7":
        setCovid("content-active");
        window.scrollTo(0, 0);
        params.id = "";
        break;

      default:
        break;
    }
    Aos.init({ duration: 2000 });
  }, [lab, praktekDokter, fisioterapi, vaksinasi, dayCare, homeCare, covid,params]);

  const handleAccordion = (event, name) => {
    event.preventDefault();
    console.log(name);

    switch (name) {
      case "LAB":
        if (lab == "content") {
          setLab("content-active");
        } else {
          setLab("content");
        }

        break;
      case "PRAKTEK_DOKTER":
        if (praktekDokter == "content") {
          setPraktekDokter("content-active");
        } else {
          setPraktekDokter("content");
        }

        break;
      case "FISIOTERAPI":
        if (fisioterapi == "content") {
          setFisioterapi("content-active");
        } else {
          setFisioterapi("content");
        }

        break;
      case "VAKSINASI":
        console.log("vaksin");
        if (vaksinasi == "content") {
          setVaksinasi("content-active");
        } else {
          setVaksinasi("content");
        }

        break;
      case "DAY_CARE":
        console.log("vaksin");
        if (dayCare == "content") {
          setDayCare("content-active");
        } else {
          setDayCare("content");
        }

        break;
      case "HOME_CARE":
        console.log("vaksin");
        if (homeCare == "content") {
          setHomeCare("content-active");
        } else {
          setHomeCare("content");
        }

        break;
      case "COVID":
        console.log("vaksin");
        if (covid == "content") {
          setCovid("content-active");
        } else {
          setCovid("content");
        }

        break;

      default:
        break;
    }
  };
  return (
    <div class="accordion-container" id="accordionExample">
      <div class="accordionx" name="LAB" id="laboraturium">
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "LAB")}
          name="LAB"
        >
          {" "}
          <div class="button-text number">01</div>
          <div class="button-text name">Laboraturium</div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div data-aos="fade-up" data-aos-anchor="#laboratirium" class={lab}>
          Sanodoc Clinic bekerja sama dengan Laboratorium Biotest untuk
          menyediakan pelayanan laboratorium yang terpercaya bagi pasien.
          Sanodoc Clinic melayani berbagai jenis pemeriksaan laboratorium
          seperti pemeriksaan darah, thorax, ultrasonografi (USG), radiologi,
          dan berbagai pemeriksaan laboratorium lainnya.
          <div style={{ display: "flex", flex: "1", flexDirection: "row" }}>
            <div style={{ width: "50%", paddingLeft: "2rem" }}>
              <p class="SFUILIGHT" style={{ textAlign: "left" }}>
                Jadwal
              </p>
              <p class="jadwal">Senin-Jumat 08.00-20.00</p>
              <p class="jadwal">Sabtu 08.00-13.00</p>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src={biotest}
                style={{ backgroundColor: "transparent", marginTop: "10px" }}
              ></img>
            </div>
          </div>
          <div></div>
        </div>
      </div>{" "}
      <div class="accordionx" ref={praktekDokterRef}>
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "PRAKTEK_DOKTER")}
        >
          {" "}
          <div class="button-text number">02</div>
          <div class="button-text name">Praktek Dokter</div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div
          data-aos="fade-up"
          // style={{ scrollMargin: "40px" }}
          class={praktekDokter}
        >
          <div class="flexbox2">
            <div class="text-div">
              <div class="spesialis-container" style={{ marginBottom: "3rem" }}>
                <div class="spesialis-title">
                  <p>Spesialis Anak</p>
                </div>
                <div class="spesialis-nama">
                  <p>dr. Susan, Sp.A., M.Kes</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Jadwal Praktek</p>
                </div>
                <div class="jadwal">
                  <p>Senin - Jumat 19.00 - 21.00 (By appointment)</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Riwayat Pendidikan</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 2006-2010 Dokter Spesialis Anak, Universitas
                    Brawijaya, Malang
                  </p>
                  <p>
                    &#9679; 1992-1998 Dokter Umum, Universitas Sebelas Maret,
                    Surakarta
                  </p>
                </div>
                <div class="SFUILIGHT">
                  <p>Pengalaman Kerja</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 2015-sekarang Ketua Komite Pencegahan dan
                    Pengendalian Infeksi, RS Gotong Royong, Surabaya
                  </p>
                  <p>
                    &#9679; 2010-sekarang Dokter Spesialis Anak, RS Gotong
                    Royong, Surabaya"
                  </p>
                </div>
              </div>

              <div class="spesialis-container">
                <div class="spesialis-title">
                  <p>Spesialis Jantung & Pembuluh Darah</p>
                </div>
                <div class="spesialis-nama">
                  <p>
                    dr. Saskia Dyah Handari, Sp.JP (K), FESC, FasCC, FASE, FIHA
                  </p>
                </div>
                <div class="SFUILIGHT">
                  <p>Jadwal Praktek</p>
                </div>
                <div class="jadwal">
                  <p>Senin-Jumat 18.00-20.00 (By appointment)</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Riwayat Pendidikan</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 2019 Fellowship Cardiac Imaging, Cleveland Cinic,
                    Cleveland, Ohio, USA
                  </p>
                  <p>
                    &#9679; 2018 Subspecialist Consultant Indonesia Collegium
                    Cardiovascular, Perhimpunan Dokter Spesialis Kardiovaskular
                    Indonesia
                  </p>
                  <p>
                    &#9679; 2015 European Cardio Vascular Imaging (EACVI) –
                    Trans Thoracic Echocardiography certification
                  </p>
                  <p>
                    &#9679; 2013 Fellowship Trans Esophageal Echocardiography,
                    St Vincent Hospital, Sydney, Australia
                  </p>
                  <p>
                    &#9679; 2011 Fellowship Cardiac CT and Cardiac MRI,
                    Kerckhoff Hospital, Bad Nauheim, Germany
                  </p>
                  <p>
                    &#9679; 2011 Fellowship Cardiac CT, Cardiac Imaging and
                    Reasearch Departement Wellington Hospital, London, United
                    Kingdom (Certified, CCT Level 2)
                  </p>
                  <p>
                    &#9679; 2009-2010 Fellowship Cardiac MRI, Flinders Hospital,
                    Adelaide, Australia (Certified, CMR Level 2)
                  </p>
                  <p>
                    &#9679; 2003-2009 Dokter Spesialis Jantung & Pembuluh Darah,
                    Universitas Airlangga, Surabaya
                  </p>
                  <p>
                    &#9679; 1994-2000 Dokter Umum, Universitas Airlangga,
                    Surabaya
                  </p>
                </div>

                <div class="SFUILIGHT">
                  <p>Pengalaman Kerja</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 2009-sekarang Dokter Spesialis Jantung & Pembuluh
                    Darah, Siloam Hospitals, Surabaya
                  </p>
                  <p>
                    &#9679; 2009-sekarang Dokter Spesialis Jantung & Pembuluh
                    Darah RS Premier, Surabaya
                  </p>
                  <p>
                    &#9679; 2003-2009 Residen Departemen Kardiologi dan
                    Kedokteran Vaskular, RSUD Dr. Soetomo, Surabaya
                  </p>
                  <p>
                    &#9679; 2001-2002 Dokter Umum, RSUD Dr. Mohamad Soewandhie,
                    Surabaya"
                  </p>
                </div>
              </div>
              <div class="spesialis-container" style={{ marginBottom: "3rem" }}>
                <div class="spesialis-title">
                  <p>Spesialis Kandungan & Kebidanan</p>
                </div>
                <div class="spesialis-nama">
                  <p>dr. Sonny Iwan Santoso, Sp.OG</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Jadwal Praktek</p>
                </div>
                <div class="jadwal">
                  <p>Senin-Jumat 18.30-21.00</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Riwayat Pendidikan</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 2016 Fellowship Laparoskopi, Tu Du Hospital, Vietnam
                  </p>
                  <p>
                    &#9679; 2009-2012 Dokter Spesialis Kandungan & Kebidanan,
                    Universitas Sam Ratulangi, Manado
                  </p>
                </div>
                <div class="SFUILIGHT">
                  <p>Pengalaman Kerja</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 2016-sekarang Dokter Spesialis Kandungan &
                    Kebidanan, RSIA Ferina, Surabaya
                  </p>
                  <p>
                    &#9679; 2012-sekarang Dokter Spesialis Kandungan &
                    Kebidanan, RS Adihusada Undaan, Surabaya
                  </p>
                </div>
              </div>
              <div class="spesialis-container" style={{ marginBottom: "3rem" }}>
                <div class="spesialis-title">
                  <p>Spesialis Penyakit Dalam</p>
                </div>
                <div class="spesialis-nama">
                  <p>dr. Dany Irawan, Sp.PD., FINASIM</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Jadwal Praktek</p>
                </div>
                <div class="jadwal">
                  <p>Senin-Jumat 09.00-12.00 & 17.00-21.00</p>
                </div>
                <div class="jadwal">
                  <p>Sabtu 09.00-12.00 & 15.00-17.00</p>
                </div>
                <div class="SFUILIGHT">
                  <p>Riwayat Pendidikan</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 1989-1993 Dokter Spesialis Penyakit Dalam,
                    Universitas Airlangga, Surabaya
                  </p>
                  <p>
                    &#9679;1976-1983 Dokter Umum, Universitas Airlangga,
                    Surabaya
                  </p>
                </div>
                <div class="SFUILIGHT">
                  <p>Pengalaman Kerja</p>
                </div>
                <div class="riwayat-pengalaman">
                  <p>
                    &#9679; 1999-sekarang Dokter Spesialis Penyakit Dalam, RS
                    Mitra Keluarga (Satelit), Surabaya
                  </p>
                  <p>
                    &#9679; 2002-2005 Ketua Team Peningkatan Mutu RS St.
                    Vincentius A Paulo (RKZ), Surabaya
                  </p>
                  <p>
                    &#9679; 1999-2013 Pembina Paguyuban Diabetes RS St.
                    Vincentius A Paulo (RKZ), Surabaya
                  </p>
                  <p>
                    &#9679; 1999-2013 Dokter Spesialis Penyakit Dalam, RS
                    Premier Surabaya, Surabaya
                  </p>
                  <p>
                    &#9679; 1997-2013 Dokter Spesialis Penyakit Dalam, RS St.
                    Vincentius A Paulo (RKZ), Surabaya
                  </p>
                  <p>
                    &#9679; 1993-1997 Dokter Spesialis Penyakit Dalam, RS TNI AU
                    Soemitro, Surabaya
                  </p>
                  <p>
                    &#9679; Merawat pasien rawat inap di RS St. Vincentius A
                    Paulo (RKZ), Surabaya & RS Mitra Keluarga (Satelit),
                    Surabaya
                  </p>
                </div>
              </div>
            </div>

            <div class="img-container">
              <p
                class="SFUILIGHT"
                style={{ textAlign: "center", marginBottom: "-1rem" }}
              >
                Ruangan Praktek Dokter
              </p>
              <div>
                <img src={praktek1} class="content-img"></img>
              </div>
              <div>
                <img src={praktek2} class="content-img"></img>
              </div>
              <div>
                <img src={praktek3} class="content-img"></img>
              </div>
              <div>
                <img src={praktek4} class="content-img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordionx" id="fisioterapi">
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "FISIOTERAPI")}
          name="FISIOTERAPI"
        >
          {" "}
          <div class="button-text number">03</div>
          <div class="button-text name">Fisioterapi</div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div data-aos="fade-up" class={fisioterapi}>
          <div class="flexbox2" style={{ flexDirection: "column" }}>
            <div
              class="text-div"
              style={{ padding: "2rem", textAlign: "justify", width: "100%" }}
            >
              Sanodoc Clinic menyediakan layanan fisioterapi yang dilakukan oleh
              ahli fisioterapi Ambrosius Basuki, SST.Ft dan Bambang Agus
              Mulyanto, SST.Ft. Layanan fisioterapi yang disediakan oleh Sanodoc
              mencakup berbagai jenis terapi untuk mengatasi berbagai masalah
              diantaranya gangguan fungsi gerak, nyeri, penyempitan saluran
              pernapasan, degenarasi sel, permasalahan sistem saraf.
            </div>
            <div style={{ paddingLeft: "2rem" }}>
              <p class="SFUILIGHT">Jadwal</p>
              <p class="jadwal">Senin-Jumat 08.00-20.00</p>
              <p class="jadwal">Sabtu 08.00-13.00</p>
            </div>
            <p
              class="SFUILIGHT"
              style={{ textAlign: "center", marginBottom: "-2rem" }}
            >
              Fasilitas Fisioterapi
            </p>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <img src={ruangFisioterapi} class="content-img"></img>
              </div>
              <div>
                <img src={ruangTreadmill} class="content-img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div class="accordionx">
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "VAKSINASI")}
          name="LAB"
        >
          {" "}
          <div class="button-text number">04</div>
          <div class="button-text name">Vaksinasi & Suntik Sehat </div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div data-aos="fade-up" class={vaksinasi}>
          Sanodoc Clinic menyediakan berbagai program vaksinasi dan suntik sehat
          melalui VACCIHAUS yang bertujuan untuk melindungi keluarga Indonesia
          dan generasi selanjutnya.
        </div>
      </div>{" "}
      <div class="accordionx">
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "DAY_CARE")}
          name="FISIOTERAPI"
        >
          {" "}
          <div class="button-text number">05</div>
          <div class="button-text name">Day Care</div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div data-aos="fade-up" class={dayCare}>
          <div class="flexbox2" style={{ flexDirection: "column" }}>
            <div
              class="text-div"
              style={{ padding: "2rem", textAlign: "justify", width: "100%" }}
            >
              Sanodoc Clinic menyediakan layanan day care yang melayani berbagai
              perawatan kesehatan yang akan dilakukan oleh perawat Sanodoc
              Clinic. Layanan day care yang disediakan Sanodoc Clinic mencakup
              layanan pasang dan lepas infus, sonde, kateter, perawatan luka,
              transfusi, dan berbagai perawatan lainnya.
            </div>
            <div style={{ paddingLeft: "2rem" }}>
              <p class="SFUILIGHT">Jadwal</p>
              <p class="jadwal">Senin-Sabtu 08.00-20.00</p>
            </div>
            <p
              class="SFUILIGHT"
              style={{ textAlign: "center", marginBottom: "-2rem" }}
            >
              Ruangan Day Care
            </p>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <img src={dayCare1} class="content-img"></img>
              </div>
              <div>
                <img src={dayCare2} class="content-img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div class="accordionx">
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "HOME_CARE")}
        >
          {" "}
          <div class="button-text number">06</div>
          <div class="button-text name">Home Care</div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div data-aos="fade-up" class={homeCare}>
          Layanan home care yang disediakan Sanodoc Clinic merupakan layanan
          kesehatan yang dapat dilakukan di rumah oleh dokter, fisioterapis, dan
          perawat dari Sanodoc Clinic. Home care dari Sanodoc Clinic menyediakan
          layanan pasang dan lepas infus, sonde, kateter, perawatan luka,
          transfusi, dan berbagai perawatan lainnya.
        </div>
      </div>{" "}
      <div class="accordionx" name="LAB">
        <button
          class="layanan-button"
          onClick={(event) => handleAccordion(event, "COVID")}
        >
          {" "}
          <div class="button-text number">07</div>
          <div class="button-text name">Covid 19</div>
          <div class="button-text arrow">
            <img src={arrow} class="arrow"></img>{" "}
          </div>
        </button>
        <div data-aos="fade-up" data-aos-anchor="#laboratirium" class={covid}>
          <p class="covid-submenu">Tes Antigen</p>
          Sanodoc Clinic menyediakan pemeriksaan diagnosis Covid-19 berupa tes
          antigen menggunakan Abbott Panbio Antigen Nasal dan Nasofaring dengan
          tingkat keakuratan 100% yang telah direkomendasikan oleh World Health
          Organization (WHO).
          <div style={{ paddingLeft: "2rem", marginTop: "1rem" }}>
            <p class="SFUILIGHT">Jadwal</p>
            <p class="jadwal">
              Senin-Sabtu 07.00-20.00 (Melayani Home Service by appointment
              08.00-16.00)
            </p>

            <p class="jadwal">
              (Melayani Home Service by appointment 08.00-16.00)
            </p>
          </div>
          <p class="covid-submenu" style={{ marginTop: "2rem" }}>
            Perawatan Isolasi Mandiri
          </p>
          Sanodoc Clinic menyediakan paket Perawatan Isolasi Mandiri yang
          bertujuan memberikan penanganan Covid-19 yang mempermudah pasien dalam
          menjalani isolasi mandiri. Perawatan Isolasi Mandiri yang disediakan
          Sanodoc Clinic terdiri berbagai layanan penanganan Covid-19 yaitu
          pemeriksaan laboratorium, konsultasi online dengan dokter dan perawat,
          monitoring oleh perawat, surat bebas isoman, dan suntik sehat.
          <p class="SFUILIGHT"style={{marginTop:'2rem',textAlign:'center'}}>Paket Perawatan Isolasi Mandiri Sanodoc</p>
          <div
            style={{
              display: "flex",
              flex: "1",
              flexDirection: "row",
              marginTop: "2rem",
            }}
          >
            <div style={{ width: "50%" }}>
              <img src={isolasiMandiri1} style={{ width: "94%" }}></img>
            </div>
            <div style={{ width: "50%" }}>
              <img src={isolasiMandiri2} style={{ width: "94%" }}></img>
            </div>
          </div>
          <p class="covid-submenu" style={{ marginTop: "2rem" }}>
            Post Covid-19 Care
          </p>
          Sanodoc Clinic menyediakan layanan Post Covid-19 Care yang bertujuan
          membantu pasien yang telah selesai menjalani isolasi mandiri
          memastikan dampak Covid-19 (long covid) telah aman terkendali. Sanodoc
          Post Covid-19 Care mencakup layanan pemeriksaan laboratorium,
          konsultasi dokter spesialis, dan suntik sehat.
          <div>
          <p class="SFUILIGHT"style={{marginTop:'2rem',textAlign:'center'}}>Paket Post Covid-19 Care Sanodoc</p>
            <img
              src={postCare}
              style={{ marginTop: "2rem", width: "50%" }}
            ></img>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Layanan;
