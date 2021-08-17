import logo from "./img/logo.png";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo2 from "./img/logo2.png";

import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import HomePage from "./pages/Home";
import TentangKamiPage from "./pages/TentangKami";
import LayananPage from "./pages/Layanan";
import ContactUsPage from "./pages/ContactUs";
import Header from "./components/Header";
function App() {
  const homeRef = useRef(null);
  const praktekDokterRef = useRef(null);
  const isolasiMandiriRef = useRef(null);
  const contactRef = useRef(null);

  const [submenu, setSubmenu] = useState("submenu");
  let submenuActive = "submenu";

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [submenu]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/layanan">
          <LayananPage />
        </Route>
        <Route exact path="/layanan/:id">
          <LayananPage />
        </Route>
        <Route path="/tentangkami">
          <TentangKamiPage />
        </Route>
        <Route path="/contactus">
          <ContactUsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <nav class="navbar bottom-bar navbar-light bg-light bsflex-row">
        <div>
          <img src={logo2} class="bottom-logo"></img>
        </div>
        {/* <div class="bottom-bar-text" data-aos="fade-right">
          <div>Contact us :</div>
          <div> Jl. Ciliwung 54, Surabaya</div>
          <div>(031) 9953 1000 &nbsp;| &nbsp;0813 3081 3300</div>
          <div class="bsflex-row">
            <div class="bsflex-row">
              <div>
                <img src={instagram} style={{ "max-height": "1rem" }}></img>
              </div>
              <div> &nbsp;@sanodoclinic &nbsp; &nbsp;</div>
            </div>
            <div class="bsflex-row">
              <div>
                <img src={facebook} style={{ "max-height": "1rem" }}></img>
              </div>
              <div> &nbsp;@sanodoclinic</div>
            </div>
          </div>
        </div> */}
      </nav>
    </Router>
  );
}

export default App;
