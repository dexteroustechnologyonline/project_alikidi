"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  authActions,
  notificationstatusSet,
} from "../app/redux/Athentication/AuthSlice";

const Header = () => {
  const { allCategorys } = useSelector((store) => store.category);
  const { loginData, notificationstatus, notificationBoxshow } = useSelector(
    (store) => store.auth
  );

  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(true);

  const signout = () => {
    dispatch(authActions.signout());
    navigate("/");
  };

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handlescrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const notifcancelclick = () => {
    const formData = {
      notifSatus: false,
      notifShowSatus: true,
    };
    dispatch(notificationstatusSet(formData));
  };
  const notifallowclick = () => {
    const formData = {
      notifSatus: true,
      notifShowSatus: true,
    };
    dispatch(notificationstatusSet(formData));
  };

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }, []);
  return (
    <>
      {/* Topbar Start */}
      <div id="top-bar" className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="unstyled top-nav">
                {loginData.isAuth === true ? (
                  <>
                    <li style={{ textTransform: "capitalize" }}>
                      <Link href="">hello {loginData.name}</Link>
                    </li>
                    <li className="mx-2" onClick={() => signout()}>
                      <Link href="">Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login">
                        Login &amp; Signup
                      </Link>
                    </li>
                    <li className="mx-2">
                      <Link href="/reporter-registation">
                        Reporter Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="col-md-4 top-social text-lg-right text-md-center">
              <ul className="unstyled">
                <li>
                  <Link
                    title="Facebook"
                    href="https://www.facebook.com/profile.php?id=100092603236788"
                    target="_blank"
                  >
                    <span className="social-icon">
                      <i className="fa fa-facebook" />
                    </span>
                  </Link>
                  <Link
                    title="Twitter"
                    href="https://twitter.com/alikidinews"
                    target="_blank"
                  >
                    <span className="social-icon">
                      <i className="fa fa-twitter" />
                    </span>
                  </Link>
                  <Link
                    title="Google+"
                    href="mailto:alikidinews@gmail.com"
                    target="_blank"
                  >
                    <span className="social-icon">
                      <i className="fa fa-google-plus" />
                    </span>
                  </Link>

                  <Link
                    title="Instagram"
                    href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                    target="_blank"
                  >
                    <span className="social-icon">
                      <i className="fa fa-instagram" />
                    </span>
                  </Link>
                  <Link
                    title="Youtube"
                    href="https://www.youtube.com/@alikidinews"
                    target="_blank"
                  >
                    <span className="social-icon">
                      <i className="fa fa-youtube" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Header start */}
      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/assets/images/alikidi987.jpg"
                    className="alikidilogo"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 header-right">
              <div className="ad-banner float-right">
                <Link href="">
                  <img
                    src="/assets/images/banner-ads/ad-top-header.png"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Main Nav Start */}
      <div className="utf_main_nav_area clearfix utf_sticky" id="myHeader">
        <div className="container mobilehedercontainer ">
          <div className="row" id="myMobileHeader">
            <nav className="navbar navbar-expand-lg col">
              <div className="utf_site_nav_inner float-left">
                <button
                  className="navbar-toggler"
                  type="button"
                  // data-toggle={!show ? "collapse " : "collapse collapsed"}
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  // aria-expanded={!show ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={() => setShow(!show)}
                >
                  {!show ? (
                    <>
                      <Link href="/">
                        <h4 className="mt-0" style={{ color: "#fff" }}>
                          X
                        </h4>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href="/">
                        <span className="navbar-toggler-icon" />
                      </Link>
                    </>
                  )}
                </button>
                <div
                  // id="navbarSupportedContent"

                  className={
                    !show
                      ? "navbar-collapse navbar-responsive-collapse collapse "
                      : //show
                        "navbar-collapse navbar-responsive-collapse collapse "
                  }
                >
                  <ul className="nav navbar-nav">
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link"
                        aria-expanded="false"
                        data-toggle="dropdown"
                      >
                        <Link href="/" style={{ color: "#333" }}>
                          Home
                        </Link>
                      </a>
                    </li>

                    {allCategorys.map((categ) => (
                      <li key={categ._id}>
                        {/* <Link href={`/category/${categ.slugUrl}`}> */}
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => setShow(!show)}
                        >
                          {categ.name}
                        </a>
                        {/* </Link> */}
                      </li>
                    ))}

                    <li>
                      <a onClick={() => setShow(!show)}>
                        <Link href="/about" style={{ color: "#333" }}>
                          About Us
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setShow(!show)}>
                        <Link href="/contact" style={{ color: "#333" }}>
                          Contact Us
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setShow(!show)}>
                        <Link href="/youtubevideo" style={{ color: "#333" }}>
                          Videos
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="utf_nav_search">
              <span id="search" onClick={() => setStatus(!status)}>
                <i className="fa fa-search" />
              </span>
            </div>
            <div
              className="utf_search_block"
              style={!status ? { display: "none" } : { display: "block" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter your keywords..."
              />
              <span
                className="utf_search_close"
                onClick={() => setStatus(!status)}
              >
                ×
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          {showButton && (
            <div id="back-to-top" className="back-to-top">
              <button
                className="btn btn-primary"
                onClick={handlescrolltop}
                title="Back to Top"
              >
                <i className="fa fa-angle-up" />
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <div>
        {notificationBoxshow === false ? (
          <>
            <div className="container">
              <div id="bottomnotification" className="bottomnotification">
                <div className="bottomnotifishow">
                  <div className="col-12">
                    <div
                      className="col-12"
                      style={{
                        height: "20vh",
                        background: "#fff",
                        width: "100%",
                      }}
                    >
                      <div>
                        <img />
                        <h5>
                          We'd like to show you notifications for the latest
                          news and updates.
                        </h5>
                      </div>

                      <div className="col-12 mb-2 ">
                        <div className="col-12 d-flex justify-content-between">
                          <Button
                            variant="contained"
                            color="error"
                            className="mx-1"
                            onClick={() => notifcancelclick()}
                          >
                            NOT YET
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            className="mx-1"
                            onClick={() => notifallowclick()}
                          >
                            YES
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div> */}
    </>
  );
};

export default Header;
