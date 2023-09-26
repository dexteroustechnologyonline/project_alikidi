"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userRegister,
  userReporterEmail,
  validateuserMobile,
} from "../redux/Athentication/AuthSlice";
import Link from "next/link";

const Page = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [errormsgClr, setErrormsgclr] = useState("red");
  const [uniqueemail, setUniqueEmail] = useState("");
  const [errormassageEmail, setErrormassageEmail] = useState("");

  const [password, setPassword] = useState("");
  const [unqpassword, setUnqPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errormassageone, setErrormassageone] = useState("");
  const [errormassageoneClr, setErrormassageoneClr] = useState("tomato");

  const [mobile, setMobile] = useState("");
  const [errormassagPhone, setErrormassagePhone] = useState("");
  const [comformphoneNo, setComformphoneNo] = useState("");
  const [errormsgClrNumber, setErrormsgclrNumber] = useState("red");

  const [errormassage, setErrormassage] = useState("");
  const [errormassageClr, setErrormassageClr] = useState("tomato");

  const dispatch = useDispatch();

  const confirmpasswordChange = (e) => {
    const value = e.target.value;
    setConfirmpassword(value);
    setErrormassageone("");

    if (value != password) {
      setErrormassageoneClr("tomato");
      setErrormassageone("password not matched");
      setUnqPassword("");
    } else {
      setUnqPassword(value);
      setErrormassageone("password matched");
      setErrormassageoneClr("green");
    }
  };

  const changeMobile = async (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobile(value);
    if (value.length === 10) {
      const responce = await dispatch(validateuserMobile(value));
      console.log(responce.payload);
      if (responce.payload.success) {
        setErrormassagePhone(responce.payload.message);
        setErrormsgclrNumber("tomato");
      } else {
        setComformphoneNo(value);
        setErrormassagePhone("Number available");
        setErrormsgclrNumber("green");
      }
    } else {
      setErrormassagePhone("Please enter Correct Mobile Number");
      setErrormsgclrNumber("tomato");
    }
  };

  const verifyemail = async (e) => {
    const value = e.target.value;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(value);
    if (value.length > 0) {
      if (value.match(mailformat)) {
        if (value != "") {
          let responce = await dispatch(userReporterEmail(value));
          if (responce.payload.success) {
            setErrormassageEmail(responce.payload.message);
            setErrormsgclr("tomato");
          } else {
            setUniqueEmail(value);

            setErrormassageEmail("Email available");
            setErrormsgclr("green");
          }
        }
      } else {
        setErrormassageEmail("please enter correct Email format");
        setErrormsgclr("tomato");
      }
    } else {
      setErrormassageEmail("please enter correct Email format");
      setErrormsgclr("tomato");
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      uniqueemail !== "" &&
      unqpassword !== "" &&
      comformphoneNo !== ""
    ) {
      const formData = {
        name: name,
        email: uniqueemail,
        mobile: comformphoneNo,
        password: unqpassword,
      };
      const responce = await dispatch(userRegister(formData));
      if (responce.payload.success) {
        setErrormassage("user create successfully");
        setErrormassageClr("green");
        // navigate("/login");
        setEmail("");
        setErrormsgclr("");
        setUniqueEmail("");
        setErrormassageEmail("");

        setPassword("");
        setUnqPassword("");
        setConfirmpassword("");
        setErrormassageone("");
        setErrormassageoneClr("");

        setMobile("");
        setErrormassagePhone("");
        setComformphoneNo("");
        setErrormsgclrNumber("");
      }
    } else {
      setErrormassage("please fill requed fields");
      setErrormassageClr("tomato");
    }
  };

  return (
    <>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Signup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="utf_block_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex justify-content-center align-items-center">
              <div className="col-lg-5 col-md-12">
                <h3>Register</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked <span style={{ color: "red" }}>*</span>
                </p>
                <form onSubmit={handlesubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Full Name*"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Phone Number*"
                          type="text"
                          required
                          minLength={10}
                          maxLength={10}
                          pattern="[6789][0-9]{9}"
                          value={mobile}
                          onChange={(e) => changeMobile(e)}
                        />
                        {errormassagPhone !== "" ? (
                          <>
                            <p
                              style={{
                                color: errormsgClrNumber,
                                textTransform: "capitalize",
                              }}
                            >
                              {errormassagPhone}
                            </p>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Email*"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => verifyemail(e)}
                        />
                        {errormassageEmail !== "" ? (
                          <>
                            <p
                              style={{
                                color: errormsgClr,
                                textTransform: "capitalize",
                              }}
                            >
                              {errormassageEmail}
                            </p>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Password*"
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Confirm Password*"
                          type="password"
                          required
                          value={confirmpassword}
                          onChange={(e) => confirmpasswordChange(e)}
                        />
                        {errormassageone !== "" ? (
                          <>
                            <p
                              style={{
                                color: errormassageoneClr,
                                textTransform: "capitalize",
                              }}
                            >
                              {errormassageone}
                            </p>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="clearfix">
                      <button className="btn btn-primary" type="submit">
                        Signup
                      </button>
                      {errormassage !== "" ? (
                        <>
                          <p
                            style={{
                              color: errormassageClr,
                              textTransform: "capitalize",
                            }}
                          >
                            {errormassage}
                          </p>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="clearfix ">
                      <Link href="/login">
                        <button className="btn btn-primary">Login</button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
