"use client";
import emailjs from "@emailjs/browser";
// import { useRef } from "react";

const Page = () => {
  //   const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb">
                <li>
                  <a>Home</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="utf_block_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 contact_area">
              <h3>Leave a Message</h3>
              <form onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control form-control-name"
                        name="user_name"
                        id="name"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control form-control-email"
                        name="user_email"
                        id="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        className="form-control form-control-phone"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        className="form-control form-control-subject"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    className="form-control form-control-message"
                    name="message"
                    id="message"
                    placeholder="Message..."
                    rows={10}
                    required
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary solid blank" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-12 contact_detail_area">
              <div className="sidebar utf_sidebar_right">
                <div className="widget">
                  <h3 className="utf_block_title">
                    <span>Office Address</span>
                  </h3>
                  <ul className="contct_detail_list">
                    <li>
                      <i className="fa fa-home" />
                      Kukatpally houshing bord 2nd
                      Phase,Hyderabad,Telangana,India - 500072
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      <a href="#">(+12) 34567 890 123</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" />
                      <a href="mailto:alikidinews@gmail.com" target="_blank">
                        alikidinews@gmail.com
                      </a>
                    </li>

                    <li>
                      <i className="fa fa-info-circle" />
                      <a href="www.alikidi.com" target="_blank">
                        www.alikidi.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h3 className="utf_block_title">
                    <span>Follow Us</span>
                  </h3>
                  <ul className="social-icon">
                    {/* <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-rss" />
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100092603236788"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/alikidinews" target="_blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:alikidinews@gmail.com" target="_blank">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-vimeo-square" />
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.youtube.com/@alikidinews"
                        target="_blank"
                      >
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/alikidinews?igshid=ZGUzMzM3NWJiOQ=="
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
